class ComprasController < ApplicationController

  def index
    @user = current_user
    @compras = @user.compras
    @compras_totales = Compra.all
  end

  def show
    @user = current_user
    @compra = Compra.find(params[:id])
  end

  def new
    @libro = Libro.find(params[:libro_id])
    @user = current_user
    @compra = @user.compras.new
  end

  def create
    @libro = Libro.find(params[:libro_id])
    @user = current_user
    @compra = @user.compras.new(estado: "E")
    @compra.libro = @libro
    if @compra.save
      redirect_to user_compras_path(current_user.id), notice: "La compra se ha creado correctamente."
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @user = current_user
    @compra = Compra.find(params[:id])
  end

  def update
    @user = current_user
    @compra = Compra.find(params[:id])
    if @compra.update(compra_params)
      redirect_to :user_compras, notice: "La compra se ha actualizado correctamente."
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @user = current_user
    @compra = @user.compras.find(params[:id])
    @compra.destroy
    redirect_to :user_compras, notice: "La compra se ha eliminado correctamente."
  end

  private
  def compra_params
    params.require(:compra).permit(:estado)
  end

end
