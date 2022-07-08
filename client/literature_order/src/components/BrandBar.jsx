import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';

export default function BrandBar(props) {
  return <div>
    <nav className="navbar bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="../images/niic.png" width={150} height={150}/>
        </a>

        <Badge badgeContent={props.cartItemCount} color="success">
          <ShoppingCartIcon
            sx={{
            color: props.cartItemCount >0? 'orange': 'white',
            fontSize: 40
          }}/>
        </Badge>
      </div>
    </nav>
  </div>
}