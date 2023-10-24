import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavDropdownItem,
  NavDropdownDivider,
  NavLink,
} from '../../bootstrap'
import Logo from './Logo'
import Button from './Button'

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-primary navbar-dark">
      <Container>
        <NavbarBrand href="#home">React-Bootstrap</NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#link">Link</NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdownItem href="#action/3.1">Action</NavDropdownItem>
              <NavDropdownItem href="#action/3.2">
                Another action
              </NavDropdownItem>
              <NavDropdownItem href="#action/3.3">Something</NavDropdownItem>
              <NavDropdownDivider />
              <NavDropdownItem href="#action/3.4">
                Separated link
              </NavDropdownItem>
            </NavDropdown>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
