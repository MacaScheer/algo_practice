class Patient < ApplicationRecord

    has_many :appointments,
    primary_key: :id,
    foreign_key: :patient_id,
    class_name: :appointment,
    dependent: :destroy

    has_many :doctors,
    through: :appointments,
    source: :doctor

end