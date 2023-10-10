import {AppBar, InputBase, styled, Toolbar, Typography} from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail'
import Notifications from  '@mui/icons-material/Notifications'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';


const StyledToolbar = styled(Toolbar)({
    display : "flex",
    justifyContent : "space-between",

})
const Search = styled("div") (({theme})=>({
    backgroundColor : "white",
    padding : "0 10px",
    borderRadius : theme.shape.borderRadius,
    width : "40%",

}));

const UserBox = styled("Box")(({theme})=>({
    display : "flex",
    alignItems : "center",
    gap : "10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }

}))

const Icons = styled("Box") (({theme})=>({
    display : "none",
    alignitems : "center",
    gap : "20px",
    // borderRadius : theme.shape.borderRadius,
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }


}));

const Navbar = ()=>{
    const [open,setOpen] = useState(false)
    return (
    <AppBar position = "sticky">
        <StyledToolbar>
           <Typography variant = "h6" sx = {{display : {xs:"none",sm:"block"}}}>Yashika U</Typography>
            <PetsIcon sx = {{display : {xs:"block",sm : "none"}}}/>
            <Search><InputBase placeholder = "Search"/> </Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                < MailIcon  />
                </Badge>
                <Badge badgeContent={2} color="error">
                < Notifications  />
                </Badge>
                <Avatar  sx = {{width :30,height:30}} alt="Cindy Baker" src="https://images.pexels.com/photos/11734518/pexels-photo-11734518.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" onClick = {e=>setOpen(true)}/>
            </Icons>
            <UserBox onClick = {e=>setOpen(true)}>
                <Avatar  sx = {{width :30,height:30}} alt="Cindy Baker" src="https://images.pexels.com/photos/11734518/pexels-photo-11734518.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                <Typography variant = "span">Yashi</Typography>
            </UserBox>          
        </StyledToolbar>
              <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose = {e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
    )
}
export default Navbar