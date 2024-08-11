class MensajesController < ApplicationController

  def index
    @libro = Libro.find(params[:libro_id])
    @mensajes = @libro.mensajes
  end

  def show
    @libro = Libro.find(params[:libro_id])
    @mensaje = @libro.mensajes.find(params[:id])
    @user = current_user
  end

  def new
    @libro = Libro.find(params[:libro_id])
    @mensaje = @libro.mensajes.new
  end

  def create
    @libro = Libro.find(params[:libro_id])
    @mensaje = @libro.mensajes.new(mensaje_params)
    @mensaje.user = current_user
    if @mensaje.save
      redirect_to libro_mensajes_path(@libro.id)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @libro = Libro.find(params[:libro_id])
    @mensaje = @libro.mensajes.find(params[:id])
  end

  def update
    @user = current_user
    @mensaje = @user.mensajes.find(params[:id])
    if @mensaje.update(mensaje_params)
      redirect_to :libro_mensajes
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @libro = Libro.find(params[:libro_id])
    @mensaje = @libro.mensajes.find(params[:id])
    @mensaje.destroy
    redirect_to :libro_mensajes, status: :see_other
  end

  private
  def mensaje_params
    params.require(:mensaje).permit(:texto)
  end

end
