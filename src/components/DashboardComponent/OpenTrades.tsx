import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"

const programmingLanguages = [
  {
    id: "1",
    name: "JavaScript",
    releaseYear: "1995",
    developer: "Brendan Eich",
    typing: "Dynamic",
    paradigm: "Multi-paradigm",
    extension: ".js",
    latestVersion: "ES2021",
    popularity: "High",
  },
  {
    id: "2",
    name: "Python",
    releaseYear: "1991",
    developer: "Guido van Rossum",
    typing: "Dynamic",
    paradigm: "Multi-paradigm",
    extension: ".py",
    latestVersion: "3.10",
    popularity: "High",
  },
  {
    id: "3",
    name: "Java",
    releaseYear: "1995",
    developer: "James Gosling",
    typing: "Static",
    paradigm: "Object-oriented",
    extension: ".java",
    latestVersion: "17",
    popularity: "High",
  },
  {
    id: "4",
    name: "C++",
    releaseYear: "1985",
    developer: "Bjarne Stroustrup",
    typing: "Static",
    paradigm: "Multi-paradigm",
    extension: ".cpp",
    latestVersion: "C++20",
    popularity: "High",
  },
  {
    id: "5",
    name: "Ruby",
    releaseYear: "1995",
    developer: "Yukihiro Matsumoto",
    typing: "Dynamic",
    paradigm: "Multi-paradigm",
    extension: ".rb",
    latestVersion: "3.0",
    popularity: "Low",
  },
  {
    id: "4",
    name: "C++",
    releaseYear: "1985",
    developer: "Bjarne Stroustrup",
    typing: "Static",
    paradigm: "Multi-paradigm",
    extension: ".cpp",
    latestVersion: "C++20",
    popularity: "High",
  },
  {
    id: "5",
    name: "Ruby",
    releaseYear: "1995",
    developer: "Yukihiro Matsumoto",
    typing: "Dynamic",
    paradigm: "Multi-paradigm",
    extension: ".rb",
    latestVersion: "3.0",
    popularity: "Low",
  },
  {
    id: "4",
    name: "C++",
    releaseYear: "1985",
    developer: "Bjarne Stroustrup",
    typing: "Static",
    paradigm: "Multi-paradigm",
    extension: ".cpp",
    latestVersion: "C++20",
    popularity: "High",
  },
  {
    id: "5",
    name: "Ruby",
    releaseYear: "1995",
    developer: "Yukihiro Matsumoto",
    typing: "Dynamic",
    paradigm: "Multi-paradigm",
    extension: ".rb",
    latestVersion: "3.0",
    popularity: "Low",
  },
  {
    id: "5",
    name: "Ruby",
    releaseYear: "1995",
    developer: "Yukihiro Matsumoto",
    typing: "Dynamic",
    paradigm: "Multi-paradigm",
    extension: ".rb",
    latestVersion: "3.0",
    popularity: "Low",
  },
]

export default function OpenTrades() {
  return (
   
    <div className="w-full flex ">
  <div className="bg-background rounded-md border w-full overflow-hidden shadow-sm">
    {/* Fixed Header */}
    <div className="sticky top-0 z-50 bg-background border-b">
      <Table className="[&_td]:border-border [&_th]:border-border border-separate border-spacing-0">
        <TableHeader>
          <TableRow>
            <TableHead className="h-9 py-2">Name</TableHead>
            <TableHead className="h-9 py-2">Release Year</TableHead>
            <TableHead className="h-9 py-2">Developer</TableHead>
            <TableHead className="h-9 py-2">Typing</TableHead>
            <TableHead className="h-9 py-2">Paradigm</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    </div>
    
    {/* Scrollable Body */}
    <div className="max-h-89 overflow-y-auto scrollbar-hide">
      <Table className="[&_td]:border-border [&_th]:border-border border-separate border-spacing-0 [&_tfoot_td]:border-t [&_tr]:border-none [&_tr:not(:last-child)_td]:border-b">
        <TableBody>
          {programmingLanguages.map((language) => (
            <TableRow key={language.id}>
              <TableCell className="py-2 font-medium">
                {language.name}
              </TableCell>
              <TableCell className="py-2">{language.releaseYear}</TableCell>
              <TableCell className="py-2">{language.developer}</TableCell>
              <TableCell className="py-2">{language.typing}</TableCell>
              <TableCell className="py-2">{language.paradigm}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
</div>




  )
}
