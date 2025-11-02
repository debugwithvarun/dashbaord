import {
  Table,
  TableBody,
  TableCell,
  // TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"

const items = [
  {
    id: "1",
    name: "Alex Thompson",
    email: "alex.t@company.com",
    location: "San Francisco, US",
    status: "Active",
    balance: "$1,250.00",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah.c@company.com",
    location: "Singapore",
    status: "Active",
    balance: "$600.00",
  },
  {
    id: "3",
    name: "James Wilson",
    email: "j.wilson@company.com",
    location: "London, UK",
    status: "Inactive",
    balance: "$650.00",
  },
  {
    id: "4",
    name: "Maria Garcia",
    email: "m.garcia@company.com",
    location: "Madrid, Spain",
    status: "Active",
    balance: "$0.00",
  },
  {
    id: "5",
    name: "David Kim",
    email: "d.kim@company.com",
    location: "Seoul, KR",
    status: "Active",
    balance: "-$1,000.00",
  },
  {
    id: "6",
    name: "John Brown",
    email: "john.brown@company.com",
    location: "New York, US",
    status: "Active",
    balance: "$1,500.00",
  },
  {
    id: "7",
    name: "Jane Doe",
    email: "jane.doe@company.com",
    location: "Paris, FR",
    status: "Inactive",
    balance: "$200.00",
  },
  {
    id: "8",
    name: "Peter Smith",
    email: "peter.smith@company.com",
    location: "Berlin, DE",
    status: "Active",
    balance: "$1,000.00",
  },
  {
    id: "9",
    name: "Olivia Lee",
    email: "olivia.lee@company.com",
    location: "Tokyo, JP",
    status: "Active",
    balance: "$500.00",
  },
  {
    id: "10",
    name: "Liam Chen",
    email: "liam.chen@company.com",
    location: "Shanghai, CN",
    status: "Inactive",
    balance: "$300.00",
  },
  {
    id: "11",
    name: "Ethan Kim",
    email: "ethan.kim@company.com",
    location: "Busan, KR",
    status: "Active",
    balance: "$800.00",
  },
  {
    id: "12",
    name: "Ava Brown",
    email: "ava.brown@company.com",
    location: "London, UK",
    status: "Active",
    balance: "$1,200.00",
  },
  {
    id: "13",
    name: "Lily Lee",
    email: "lily.lee@company.com",
    location: "Seoul, KR",
    status: "Active",
    balance: "$400.00",
  },
  {
    id: "14",
    name: "Noah Smith",
    email: "noah.smith@company.com",
    location: "New York, US",
    status: "Inactive",
    balance: "$600.00",
  },
  {
    id: "15",
    name: "Eve Chen",
    email: "eve.chen@company.com",
    location: "Taipei, TW",
    status: "Active",
    balance: "$1,800.00",
  },
]

export default function Component() {



  return (
    <div className="w-full ">
      <div className="w-full max-w-none rounded-md border p-2  shadow-sm">
        <div className="max-h-91 overflow-y-auto scrollbar-hide ">
          <Table className="w-full [&_td]:border-border [&_th]:border-border border-separate border-spacing-0 [&_tfoot_td]:border-t [&_th]:border-b [&_tr]:border-none [&_tr:not(:last-child)_td]:border-b">
            <TableHeader className="bg-background/95 sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-semibold">Name</TableHead>
                <TableHead className="font-semibold">Email</TableHead>
                <TableHead className="font-semibold">Location</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="text-right font-semibold">Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-muted-foreground">{item.email}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>
                    <span 
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === 'Active' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
                      }`}
                    >
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell className={`text-right font-mono ${
                    item.balance.startsWith('-') ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'
                  }`}>
                    {item.balance}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          
          </Table>
        </div>
      </div>
    </div>
  )
}