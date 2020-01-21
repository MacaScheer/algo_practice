# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

doc_names = ['Tom Styer', 'Barry Mckokiner', 'Craig Stacek']
pat_names = ['Pennywise Clown', 'Dirty Dancer', 'Patrick Swayze', 'Donovan Lopez', 'Harry Truman', 'Steven Brule', 'Liz Lemon', 'Dick Richard', 'Sketch Guy', 'Isak Alisik', 'Min Maeweather', 'Turkey Man']


for i in 0..11 do
    doc = doc_names[i % 3]
    d1 = Doctor.create!(name: doc)

    pat = pat_names[i]
    p1 = Patient.create!(name: pat)
    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    Appointment.create!(doctor_id: d1.id, patient_id: p1.id, symptoms: 'Sore Balls', scheduled_day: '02/12/2020' )
end

