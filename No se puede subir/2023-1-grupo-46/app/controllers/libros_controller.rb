class LibrosController < ApplicationController

  def new
    @libro = Libro.new
  end
    
  def create
    @libro = Libro.new(libro_params)
    if @libro.save
      redirect_to @libro
    else
      render :new, status: :unprocessable_entity
    end
  end

  def index
    @libros = Libro.all
    @user = current_user
    @compras = Compra.all
    # Seleccioname los libros más comprados del modelo Compra
    @libros_mas_comprados = Compra.group(:libro_id).order('count_id desc').limit(3).count(:id)
    @best_sellers = []
    @libros_mas_comprados.each do |id, num|
      @best_sellers << Libro.find(id)
    end
    if params[:position]
      valor_seleccionado = params[:position]
      redirect_to "/libros/#{valor_seleccionado}"
    end
  end

  def show
    @libro = Libro.find(params[:id])
    @libros_categoria = Libro.where(categoria: @libro.categoria).limit(6)
    @user = current_user
    #filtrar libros_categoria para que no aparezca el libro que se está viendo
    @libros_filtrados = []
    @libros_categoria.each do |libro|
      if libro.id != @libro.id
        @libros_filtrados << libro
      end
    end
  end
    
  def destroy
    @libro = Libro.find(params[:id])
    @libro.destroy
    redirect_to :libros, status: :see_other
  end

  def edit
    @libro = Libro.find(params[:id])
  end

  def update
    @libro = Libro.find(params[:id])
    if @libro.update(libro_params)
      redirect_to @libro
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def categoria
    # Obtén el parámetro de categoría seleccionado
    @categoria_seleccionada = params[:categoria]
    # Aquí puedes realizar la lógica para buscar los libros según la categoría seleccionada
    @libros = Libro.where(categoria: @categoria_seleccionada)
  end

  private
  def libro_params
    params.require(:libro).permit(:titulo, :fecha, :categoria, :autor, :precio, :stock, :descripcion, :picture)
  end

end
