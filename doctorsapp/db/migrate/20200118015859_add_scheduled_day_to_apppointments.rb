class AddScheduledDayToApppointments < ActiveRecord::Migration[6.0]
  def change
    add_column :appointments, :scheduled_day, :string
  end
end
