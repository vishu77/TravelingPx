# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

flypuppy = User.create(username: "flypuppy", password: "iamsofly")

polarbear = Photo.create(
            poster_id: flypuppy.id,
            title: "My Polar Bear Friend",
            description: "Busy resting on that rock",
            image: File.open('app/assets/images/photo-1465232377925-cce9a9d87843.jpeg'));
japan = Photo.create(
            poster_id: flypuppy.id,
            title: "Japan Is Great!",
            description: "Japan culture is so beautiful",
            image: File.open('app/assets/images/photo-1445539348538-d540ff031729.jpeg'));
aurora = Photo.create(
            poster_id: flypuppy.id,
            title: "Auroras?",
            description: "Beautiful Skyline",
            image: File.open('app/assets/images/photo-1466939721550-ad3ef4b9eeec.jpeg'));
