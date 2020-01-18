class Appointment < ApplicationRecord

    
belongs_to :doctor,
primary_key: :id, #doctor's id
foreign_key: :doctor_id, #appointments table
class_name: :doctor,
dependent: :destroy

belongs_to :patient,
primary_key: :id, #patient's id
foreign_key: :patient_id, #appointments table
class_name: :patient,
dependent: :destroy


end