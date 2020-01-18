class RemoveForeignKeyFromAppointments < ActiveRecord::Migration[6.0]
  def change
    remove_column :appointments, :doctor, :integer, null: false
    remove_column :appointments, :patient, :integer, null: false

  end
end
