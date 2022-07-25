# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user1 = User.create(
    username: "user1", 
    password: "password1"
    )
user2 = User.create(
    username: "user2", 
    password: "password2"
   )

user3 = User.create(
    username: "user3", 
    password: "password3"
   )
user4 = User.create(
    username: "user4", 
    password: "password4"
    )
user5 = User.create(
        username: "user5", 
        password: "password5"
        )

game_1 = Game.create(
    title: "Uncharted: The Lost Legacy",
    year: "2017",
    image_url: "https://drive.google.com/uc?id=1Ptr5Cey3t1Lhrs6vFJ_vV_HxU-8mtmLI"
)
game_2 = Game.create(
    title: "Grand Theft Auto V",
    year: "2013",
    image_url: "https://drive.google.com/uc?id=1G3IxmIAPh_1rv44xy1fqXh6YKjRMh-aL"
)
game_3 = Game.create(
    title: "Red Dead Redemption 2",
    year:"2008",
    image_url: "https://drive.google.com/uc?id=1nmwRNYKRXweeu31AXhHzp2Dx9qltHqMg"
)
game_4 = Game.create(
    title: "Super Mario Galaxy 2",
    year: "2010",
    image_url: "https://drive.google.com/uc?id=1t5c5jd8ZUX_5feVB6wwUeejZHCiw6Hie"
)
game_5 = Game.create(
    title: "Halo 2",
    year: "2004",
    image_url: "https://drive.google.com/uc?id=1LJX9AQlJxQIUzFOY5AoFfeWoXoRNR2Q2"
)
game_6 = Game.create(
    title: "Grand Theft Auto IV",
    year: "2008",
    image_url: "https://drive.google.com/uc?id=1ZN9voayiYCvmKUIhG8cPtqCTpSnQSNB4"
)
game_7 = Game.create(
    title: "The Last of Us",
    year: "2013",
    image_url: "https://drive.google.com/uc?id=1ToWAzT4djCgUBJTBIEkFE0m3j57ribEA"
)
game_8 = Game.create(
    title: "Tom Clancy's Ghost Recon Wildlands",
    year: "2017",
    image_url: "https://drive.google.com/uc?id=1spnadJDySBEU_DxWx-trkarwp4PmR0K8"
)
game_9 = Game.create(
    title: "Hitman",
    year: "2016",
    image_url: "https://drive.google.com/uc?id=1Klo2nEk5U9hpfW5OBnXmufc2-cwPA5Ln"
)
game_10 = Game.create(
    title:  "Mafia 3",
    year: "2016",
    image_url: "https://drive.google.com/uc?id=1MsaTbRRueLUqJUlOII9zPOxacZQ3td1a"
)
game_11 = Game.create(
    title: "Uncharted 4: A Thief's End",
    year: "2016",
    image_url: "https://drive.google.com/uc?id=1mAmdjD7ZJxI9ywpI0Tk_DDDdVDcBvzZq" 
)

18.times do

    Review.create(
        comments: Faker::Lorem.paragraph,
        score: rand(1..10),
        user_id: rand(1..5),
        game_id: rand(1..11)
    )

end
