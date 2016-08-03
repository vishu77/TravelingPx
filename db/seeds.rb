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
            url: "https://images.unsplash.com/photo-1465232377925-cce9a9d87843");
camping = Photo.create(
            poster_id: flypuppy.id,
            title: "Night in the woods",
            description: "Camping with my best buddy, the polar bear",
            url: "https://images.unsplash.com/photo-1470246973918-29a93221c455");
animal = Photo.create(
            poster_id: flypuppy.id,
            title: "Some animal",
            description: "Wanted to eat me, shame on him.",
            url: "https://images.unsplash.com/photo-1470239313878-0d1de9d85508");
