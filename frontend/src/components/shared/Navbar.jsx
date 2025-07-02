import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  return (
    <>
      <div className="bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto h-16">
          <div>
            <h1 className="text-2xl font-bold">
              Job <span className="text-blue-500">Portal</span>
            </h1>
          </div>
          <div className="flex items-center gap-10">
            <ul className="flex font-medium items-center gap-4">
              <li>Home</li>
              <li>Job</li>
              <li>Browse</li>
            </ul>

            <Popover>
              <PopoverTrigger asChild>
                <Avatar className={"cursor-pointer"}>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className={"w-80"}>
                <div className="flex gap-4 space-y-2">
                  <Avatar className={"cursor-pointer"}>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Ritik Kumar</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit.
                    </p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
