let person = {
        name:'Mary',
        age:21,
        address:'Kimathi St, Nairobi',
        isMarried:false,
        job_title:'Software Developer',
        'phone_number':'0712345678'
    }
    console.log(person)
    let age = person.age
    console.log(age)

    let address=person['address']
    console.log(address)

    let keys = Object.keys(person)
    let values= Object.values(person)
    let entries= Object.entries(person)
    console.log(keys)
    console.log(values)
    console.log(entries)

    let user = {
        name: "Alice",
        hobbies: ["cycling", "painting"],
        posts: [
          {
            id: 1,
            title: "My first post",
            comments: [
              { id: 101, text: "Great post!" },
              { id: 102, text: "Thanks for sharing." },
            ],
          },
          {
            id: 2,
            title: "Another day",
            comments: [],
          },
        ],
      };
    //   display great post