class CreatePatient < ActiveRecord::Migration[6.0]
  def change
    create_table :patients do |t|
      t.string :name, null: false
      
    end
  end
end
