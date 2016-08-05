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
            description: "Busy resting on that rock");
camping = Photo.create(
            poster_id: flypuppy.id,
            title: "Night in the woods",
            description: "Camping with my best buddy, the polar bear");
animal = Photo.create(
            poster_id: flypuppy.id,
            title: "Some animal",
            description: "Wanted to eat me, shame on him.");
