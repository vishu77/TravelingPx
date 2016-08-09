# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

hachi = User.create(
  username: "hachiko", password: "shibainu",
  first_name: "Super", last_name: "Pup",
  about: "I Love Traveling!",
  city: "Tokyo", country: "Japan",
  avater: open('https://s-media-cache-ak0.pinimg.com/564x/41/f1/1f/41f11fdd33efb490221cff2a2c81cf70.jpg'),
  cover: open('https://hd.unsplash.com/photo-1463319544068-9bda29ebe93c')
);

panda = User.create(
  username: "lazypanda", password: "eatallday",
  first_name: "Lazy", last_name: "Panda",
  about: "Bamboo all day, everyday",
  city: "Beijing", country: "China",
  avater: open('https://media1.britannica.com/eb-media/80/150980-004-EE46999B.jpg'),
  cover: open('https://hd.unsplash.com/photo-1426020744253-568cd6345e93')
);

judy = User.create(
  username: "judyhopps", password: "slybunny",
  first_name: "Judy", last_name: "Hopps",
  about: "200 Tickets before noon.",
  city: "Central", country: "Zootopia",
  avater: open('https://pbs.twimg.com/profile_images/714205246273269763/YCzpamQq.jpg'),
  cover: open('http://vignette2.wikia.nocookie.net/disney/images/d/d4/Zootopia_City.jpg/revision/latest?cb=20151204192009')

chinchilla = User.create(
  username: "bananaraisens", password: "iamfat",
  first_name: "Banana", last_name: "Raisen",
  about: "In my cage with nothing to do.",
  city: "Brooklyn", country: "New York",
  avater: open('https://s-media-cache-ak0.pinimg.com/736x/14/4b/4c/144b4cb40239e9bfb2bbcac91427c88b.jpg'),
  cover: open('https://hd.unsplash.com/5/night-city.jpg')

arthas = User.create(
  username: "lichking", password: "frostmourne",
  first_name: "Arthas", last_name: "Menethil",
  about: "Frostmourne Hungers",
  city: "Ice Crown Citadel", country: "Outlands",
  avater: open('http://arthasmenethil.com/5.jpg'),
  cover: open('http://orig13.deviantart.net/234f/f/2014/182/4/7/icecrownfinished_png2_by_yandesign-d7otpww.png')
);

sora = User.create(
  username: "sora", password: "keyblade",
  first_name: "Sora", last_name: "",
  about: "Out to save the world?",
  city: "Destiny Islands", country: "Kingdom Hearts",
  avater: open('http://cdn.staticneo.com/w/kingdomhearts/thumb/0/07/Sora_KHII.png/200px-Sora_KHII.png'),
  cover: open('https://i.ytimg.com/vi/berZX7mPxbE/maxresdefault.jpg')
);

ben = User.create(
  username: "benstiller", password: "secretlife",
  first_name: "Ben", last_name: "Stiller",
  about: "Traveling to find Sean Penn",
  city: "Manhattan", country: "New York",
  avater: open('http://cdn.phillymag.com/wp-content/uploads/2013/12/the-secret-life-of-walter-mitty.jpg'),
  cover: open('http://redvdit.com/reviews/wp-content/uploads/2016/05/SecretLife4.jpg')
);

vivi = User.create(
  username: "vivi", password: "blackmage",
  first_name: "Vivi", last_name: "Ornitier",
  about: "Super Shy and Clumsy",
  city: "Alexandria", country: "Gaia",
  avater: open('https://s-media-cache-ak0.pinimg.com/564x/90/86/64/908664f74b3d73de36cbcbddc198afaa.jpg'),
  cover: open('http://cdn.mos.cms.futurecdn.net/v6MY2GDrwaAkb3JYqnsdu8.jpg')
);

jimmy = User.create(
  username: "jimmyfallon", password: "tonightshow",
  first_name: "Jimmy", last_name: "Fallon",
  about: "Don't keep reaching for the stars because you'll just look like an idiot stretching that way for no reason.",
  city: "Manhattan", country: "New York",
  avater: open('http://www.nbc.com/the-tonight-show/5e8cf404/images/about/JimmyPortrait.jpg'),
  cover: open('https://hd.unsplash.com/photo-1423655156442-ccc11daa4e99')
);

anne = User.create(
  username: "annehathaway", password: "aboutthefit",
  first_name: "Anne", last_name: "Hathaway",
  about: "Jules Standard Time",
  city: "London", country: "United Kingdom",
  avater: open('http://cache.emirates247.com/polopoly_fs/1.616087.1452491161!/image/image.JPG'),
  cover: open('https://hd.unsplash.com/photo-1452788041655-75a2d80535e0')
);

polarbear = Photo.create(
            poster_id: flypuppy.id,
            title: "My Polar Bear Friend",
            description: "Busy resting on that rock",
            image: open('https://hd.unsplash.com/photo-1465232377925-cce9a9d87843'));
japan = Photo.create(
            poster_id: nemo.id,
            title: "Japan Is Great!",
            description: "Amazing Architecture",
            image: open('https://hd.unsplash.com/photo-1445539348538-d540ff031729'));
aurora = Photo.create(
            poster_id: flypuppy.id,
            title: "Auroras?",
            description: "Beautiful Skyline",
            image: open('https://hd.unsplash.com/photo-1443926818681-717d074a57af'));
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
bamboo = Photo.create(
            poster_id: angrypanda.id,
            title: "Bamboo Forest",
            description: "All the bamboo I can eat",
            image: open('https://unsplash.com/search/japan?photo=buF62ewDLcQ'));
pineapples = Photo.create(
            poster_id: nemo.id,
            title: "Pineapples",
            description: "What da!? Pineapples attacking my pool",
            image: open('https://hd.unsplash.com/photo-1451479456262-b94f205059be'));
