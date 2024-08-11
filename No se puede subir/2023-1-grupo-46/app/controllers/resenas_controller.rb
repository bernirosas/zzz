class ResenasController < ApplicationController

  def index
    @libro = Libro.find(params[:libro_id])
    @resenas = @libro.resenas
  end

  def show
    @user = current_user
    @libro = Libro.find(params[:libro_id])
    @resena = @libro.resenas.find(params[:id])
  end

  def new
    @libro = Libro.find(params[:libro_id])
    @resena = @libro.resenas.new
  end

  def create
    @libro = Libro.find(params[:libro_id])
    @resena = @libro.resenas.new(resena_params)
    @resena.user = current_user
    if @resena.save
      redirect_to libro_resenas_path(@libro.id)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @libro = Libro.find(params[:libro_id])
    @resena = @libro.resenas.find(params[:id])
  end

  def update
    @user = current_user
    @resena = @user.resenas.find(params[:id])
    if @resena.update(resena_params)
      redirect_to :libro_resenas
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @libro = Libro.find(params[:libro_id])
    @resena = @libro.resenas.find(params[:id])
    @resena.destroy
    redirect_to :libro_resenas, status: :see_other
  end

  private
  def resena_params
    params.require(:resena).permit(:titulo, :cuerpo)
  end

end
