class Api::ClocksController < ApplicationController
  def show
    render json: Clock.find(params[:id])
  end

  def create
    clock = Clock.new(clock_params)
    if clock.save
      render json: clock
    else
      render json: { errors: clock.errors }, status: :unprocessable_entity
    end
  end

  def update
    clock = Clock.find(params[:id])
    if clock.update(clock_params)
      render json: clock
    else
      render json: { errors: clock.errors }, status: :unprocessable_entity
    end
  end

  private

  def clock_params
    params.require(:clock).permit(:datetime_test, :date_test)
  end
end
