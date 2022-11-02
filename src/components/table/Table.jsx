import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Jeffrey Lynch",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Adobe Access Request",
      date: "1 March",
      amount: "DMG",
      method: "Tony Baldwin",
      status: "Approved",
      priority: "High"
    },
    {
      id: 2235235,
      product: "Paul Mims",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Online Lab Issue For Argus",
      date: "1 March",
      amount: "HELPDESK",
      method: "Geovani Pelaez",
      status: "Pending",
      priority: "Low"
    },
    {
      id: 2342353,
      product: "Lawrence Manganello",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "booobooo",
      date: "1 March",
      amount: "MEDIA",
      method: "booobooo",
      status: "Pending",
      priority: "Low"
    },
    {
      id: 2357741,
      product: "Betsy Yoon",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Laptop reassign to new hire employee Alisa Tchernigova",
      date: "1 March",
      amount: "MEDIA",
      method: "mochi",
      status: "Approved",
      priority: "High"
    },
    {
      id: 2342355,
      product: "f.khan8",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "VPN / remote access",
      date: "1 March",
      amount: "HELPDESK",
      method: "don petter",
      status: "Pending",
      priority: "High"
    },
    {
        id: 2342355,
        product: "f.khan8",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Need Access to Shared Calendar Restored",
        date: "1 March",
        amount: "HELPDESK",
        method: "don petter",
        status: "Pending",
        priority: "Low"
      },
      {
        id: 2342355,
        product: "f.khan8",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Desktop Issue",
        date: "1 March",
        amount: "HELPDESK",
        method: "don petter",
        status: "Pending",
        priority: "High"
      },
      {
        id: 2342355,
        product: "f.khan8",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Request for assistance with employee's Desktop who has retired.",
        date: "1 March",
        amount: "HELPDESK",
        method: "don petter",
        status: "Pending",
        priority: "Medium"
      },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Customer Look UP</TableCell>
            <TableCell className="tableCell">Title</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Custom group</TableCell>
            <TableCell className="tableCell">Technican</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">Priority</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">{row.priority}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;