class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.string :type, null: false
      t.string :patient, null: false
      t.string :doctor, null: false
      t.string :date, null: false
      t.timestamps
    end
      add_index :appointments, :doctor
      add_index :appointments, :date
  end
end
