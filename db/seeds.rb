# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

flypuppy = User.create(username: "flypuppy", password: "iamsofly")
angrypanda = User.create(username: "angrypanda", password: "bamboo")
nemo = User.create(username: "iamnemo", password: "orange")

polarbear = Photo.create(
            poster_id: flypuppy.id,
            title: "My Polar Bear Friend",
            description: "Busy resting on that rock",
            image: File.open('app/assets/images/photo-1465232377925-cce9a9d87843.jpeg'));
japan = Photo.create(
            poster_id: flypuppy.id,
            title: "Japan Is Great!",
            description: "Amazing Architecture",
            image: File.open('app/assets/images/photo-1445539348538-d540ff031729.jpeg'));
aurora = Photo.create(
            poster_id: flypuppy.id,
            title: "Auroras?",
            description: "Beautiful Skyline",
            image: File.open('app/assets/images/photo-1466939721550-ad3ef4b9eeec.jpeg'));
fuzzy = Photo.create(
            poster_id: flypuppy.id,
            title: "Fuzzy Cat",
            description: "The Details!!!",
            image: open('https://hd.unsplash.com/photo-1468465369248-3054456ce11a'));
wedding = Photo.create(
            poster_id: angrypanda.id,
            title: "Japanese Wedding",
            description: "Tradional Japanese Wedding",
            image: open('https://unsplash.com/search/japan?photo=kVeZoNqHDNk'));
bamboo= Photo.create(
            poster_id: angrypanda.id,
            title: "Bamboo Forest",
            description: "All the bamboo I can eat",
            image: open('https://unsplash.com/search/japan?photo=buF62ewDLcQ'));
pineapples = Photo.create(
            poster_id: nemo.id,
            title: "Pineapples",
            description: "What da!? Pineapples attacking my pool",
            image: open('https://hd.unsplash.com/photo-1451479456262-b94f205059be'));
