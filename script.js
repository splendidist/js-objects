//Creating objects

const person = {
  name: "Lucy",
  age: 25,
  favouriteColour: "pink",
};

console.log(person);

console.table(person); //this logs the object in a table format

//Accessing properties

console.log(person.name); //Output: Lucy

console.log(person.age); //Output: 25

console.log(person.favouriteColour); //Output: pink

//Adding properties

person.favouriteFood = "pancakes";

console.table(person); //Output: "pancakes" is added as the last index

console.log(person.favouriteFood); //Output: pancakes

//car

const car = {
  make: "Stellantis",
  model: "fiat 500",
  colour: "pink",
};

console.log(
  "Buy this cute",
  car.model,
  "made by",
  car.make,
  "in our bestselling",
  car.colour,
  "colour"
);

//book

const book = {
  title: "Design as Art",
  author: "Bruno Munari",
  pageNo: 223,
};

console.log(
  "Read",
  book.title,
  "by",
  book.author,
  "with only",
  book.pageNo,
  "pages"
);

//Complex Objects

//Creating complex objects

const blogPost = {
  title: "My first blog post",
  author: {
    name: "Lucy",
    age: 25,
    favouriteColour: "pink",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  content: "This is my blog post about learning objects and arrays.",
};

console.log(blogPost);
console.table(blogPost);

//Accessing properties

console.log(blogPost.author.name); //Output: Lucy

console.log(blogPost.tags[0]); //Output: coding

console.log(blogPost.tags.length); //Output: 4 (the number of tags

//Combine with a for loop

console.log(
  `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
); //Output: There are 4 tags for post "My first blog post":

for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]);
} //Output: coding, javascript, objects, arrays

//Combine with a for of loop

console.log(`Tags for post "${blogPost.title}":`); // Output: Tags for post "My first blog post":

for (let tag of blogPost.tags) {
  console.log(tag);
} //Output: coding, javascript, objects, arrays
