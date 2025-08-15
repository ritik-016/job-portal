import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2  border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Signup</h1>
          <div className="my-2">
            <Label className="my-2">Full Name</Label>
            <Input type="text" placeholder="Enter your full name" />
          </div>
          <div className="my-2">
            <Label className="my-2">Email</Label>
            <Input type="email" placeholder="Enter your email" />
          </div>
          <div className="my-2">
            <Label className="my-2">Phone Number</Label>
            <Input type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="my-2">
            <Label className="my-2">Password</Label>
            <Input type="password" placeholder="Enter your password" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center gap-3">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center gap-3">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input 
                className="cursor-pointer"
                type="file"
                accept="image/*"
              />
            </div>
          </div>
          <Button type="submit" className="w-full my-4">Signup</Button>
          <span>Already have an account? <Link to="/login" className="text-blue-500">Login</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
