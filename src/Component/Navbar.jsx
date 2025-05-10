import React from 'react';
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@heroui/react';

const NavbarArea = () => {
  return (
    <>
      <Navbar
        shouldHideOnScroll
        isBlurred={false}
        className=" w-full bg-transparent"
        maxWidth="xl"
      >
        <NavbarBrand>
          <div className=" max-w-50">
            <img src="Flogo.png" alt="" />
          </div>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              variant="bordered"
              radius="full"
              className=" py-0"
            >
              Contact
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default NavbarArea;
