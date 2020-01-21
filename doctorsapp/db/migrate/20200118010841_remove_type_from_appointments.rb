class RemoveTypeFromAppointments < ActiveRecord::Migration[6.0]
  def change
    remove_column :appointments, :type, :string
  end
end
