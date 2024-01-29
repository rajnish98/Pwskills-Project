const books = [
  {
  title: "Concept of Physics",
  author: "HC Verma",
  publicationYear: 2008
},
{
  title: "Zero to one",
  author: "Peter Thiel",
  publicationYear: 2012
},
{
  title: "The 100$ Startup",
  author: "CXhris Guillebeau",
  publicationYear: 2010
},
{
  title: "Algorithm design",
  author: "skiena",
  publicationYear: 2009
},
{
  title: "Naruto",
  author: "Masashi Kishimoto",
  publicationYear: 1999
},
{
  title: "Belive me",
  author: "Rajnish Pandey",
  publicationYear: 2023
},
];
const filterBooks = books.filter((book) => book.publicationYear >= 2010).map((book) => ({
  title: book.title,
  author: book.author.toUpperCase(),
  publicationYear: book.publicationYear,
}));
console.log(filterBooks);