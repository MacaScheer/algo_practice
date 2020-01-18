class Doctor < ApplicationRecord
has_many :appointments,
primary_key: id:,
foreign_key: :doctor_id,
class_name: :appointment,
dependent: :destroy

has_many :patients,
through: :appointments,
source: :patients


# def appointments_for_doctor
#     Appointment.where({doctor: self.name})
# end
end