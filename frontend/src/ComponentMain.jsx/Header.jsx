import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SiGreatlearning } from "react-icons/si";
import { useSelector } from "react-redux";
import { resetState } from "@/redux/user/userSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


function Header() {
  const { currentUser } = useSelector((state) => state.user); 
  const dispatch=useDispatch();
  const navigate=useNavigate()// Directly access user from the state
  useEffect(() => {
    console.log(currentUser);
  }, []);
  const handleLogout = async () => {
    try {
        const res = await fetch('/api/auth/logout', {
            method: "POST",
            credentials: 'include', // Ensures cookies are sent along
        });

        if (res.ok) {  // Check if the response status is 200-299
          dispatch(resetState())
           navigate('/login')
        
           
           

        } else {
            alert("Logout failed. Please try again.");
        }
      
    } catch (error) {
        console.error("Error during logout:", error);
        alert("An error occurred during logout. Please try again.");
    }
};


  return (
    <div className=" h-16 dark:bg-[#020817] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
      {/* DeskTop */}
      <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full">
        <div className="flex items-center gap-2">
          <SiGreatlearning size={"30"} />
          <Link to="">
            <h1 className="hidden md:block font-extrabold text-2xl">    E-Learning</h1>
          </Link>
        </div>
        {/* user icons and lighmode */}
        <div className="flex items-center gap-8">
          {currentUser?(
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage
                  src={currentUser?.profilePicture || "https://github.com/shadcn.png"}
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link to="my-learning">My learning</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {" "}
                  <Link to="profile">Edit Profile</Link>{" "}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuGroup>
              {currentUser?.role === "instructor" && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><Link to="/admin/dashboard">Dashboard</Link></DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          ):(<div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button onClick={() => navigate("/login")}>Signup</Button>
          </div>)}
          
        </div>
      </div>
    </div>
  );
}

export default Header;
