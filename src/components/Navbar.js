import React from "react";
import { NavDropdown, Container, Navbar, Nav } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import "react-bootstrap-submenu/dist/index.css";
import { useContext } from "react";
import dataContext from "../context/dataContext";
import CircumIcon from "@klarr-agency/circum-icons-react";

const Header = () => {
  const {
    fetchAll,
    fetchByRegion,
    fetchByCountry,
    fetchByTopic,
    fetchByPestle,
    fetchBySector,
    fetchByEndYear,
    setfilter,
    mode,
    setmode,
  } = useContext(dataContext);

  return (
    <>
      <Navbar
        bg={mode}
        expand="lg"
        variant={mode}
        className={`${
          mode === "light" ? "border-b-2" : "border-b-2 border-gray-500"
        }`}
      >
        <Container>
          <Navbar.Brand
            className={`${
              mode === "light" ? "text-slate-700" : "text-slate-100"
            }`}
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            Visualizer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              <Nav.Link
                onClick={() => {
                  fetchAll();
                  setfilter("default");
                }}
              >
                World
              </Nav.Link>
              <div
                className="flex items-center lg:hidden cursor-pointer"
                onClick={() => {
                  mode === "light" ? setmode("dark") : setmode("light");
                }}
              >
                <Nav.Link className="mr-2">Mode</Nav.Link>
                <CircumIcon
                  name={mode}
                  color={mode === "light" ? "dark" : "white"}
                  size={"20px"}
                />
              </div>
              <NavDropdownMenu title="Filters" id="collasible-nav-dropdown">
                <DropdownSubmenu
                  className="hover:cursor-pointer"
                  title="Region"
                >
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByRegion("Europe");
                      setfilter("region");
                    }}
                  >
                    Europe
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByRegion("Central America");
                      setfilter("region");
                    }}
                  >
                    Central America
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByRegion("Northern America");
                      setfilter("region");
                    }}
                  >
                    Northern America
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByRegion("Central Africa");
                      setfilter("region");
                    }}
                  >
                    Central Africa
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByRegion("Northern Africa");
                      setfilter("region");
                    }}
                  >
                    Northern Africa
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByRegion("Southern Africa");
                      setfilter("region");
                    }}
                  >
                    Southern Africa
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByRegion("Western Africa");
                      setfilter("region");
                    }}
                  >
                    Western Africa
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByRegion("Central As");
                      setfilter("region");
                    }}
                  >
                    Central Asia
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByRegion("Southern Asia");
                      setfilter("region");
                    }}
                  >
                    Southern Asia
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByRegion("Eastern Asia");
                      setfilter("region");
                    }}
                  >
                    Eastern Asia
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByRegion("Western Asia");
                      setfilter("region");
                    }}
                  >
                    Western Asia
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByRegion("South-Eastern Asia");
                      setfilter("region");
                    }}
                  >
                    South-Eastern Asia
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByRegion("Saudi Arabia");
                      setfilter("region");
                    }}
                  >
                    Saudi Arabia
                  </NavDropdown.Item>
                </DropdownSubmenu>
                <DropdownSubmenu
                  className="hover:cursor-pointer"
                  title="Country"
                >
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByCountry("United States of America");
                      setfilter("country");
                    }}
                  >
                    USA
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByCountry("Russia");
                      setfilter("country");
                    }}
                  >
                    Russia
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByCountry("India");
                      setfilter("country");
                    }}
                  >
                    India
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByCountry("China");
                      setfilter("country");
                    }}
                  >
                    China
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByCountry("Germany");
                      setfilter("country");
                    }}
                  >
                    Germany
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByCountry("United Kingdom");
                      setfilter("country");
                    }}
                  >
                    UK
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByCountry("Libya");
                      setfilter("country");
                    }}
                  >
                    Libya
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByCountry("Egypt");
                      setfilter("country");
                    }}
                  >
                    Egypt
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByCountry("Canada");
                      setfilter("country");
                    }}
                  >
                    Canada
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByCountry("Saudi Arabia");
                      setfilter("country");
                    }}
                  >
                    Saudi Arabia
                  </NavDropdown.Item>
                </DropdownSubmenu>
                <DropdownSubmenu className="hover:cursor-pointer" title="Topic">
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByTopic("oil");
                      setfilter("topic");
                    }}
                  >
                    Oil
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByTopic("gas");
                      setfilter("topic");
                    }}
                  >
                    Gas
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByTopic("market");
                      setfilter("topic");
                    }}
                  >
                    Market
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByTopic("gdp");
                      setfilter("topic");
                    }}
                  >
                    GDP
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByTopic("war");
                      setfilter("topic");
                    }}
                  >
                    War
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByTopic("production");
                      setfilter("topic");
                    }}
                  >
                    Production
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByTopic("export");
                      setfilter("topic");
                    }}
                  >
                    Export
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByTopic("battery");
                      setfilter("topic");
                    }}
                  >
                    Battery
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByTopic("biofuel");
                      setfilter("topic");
                    }}
                  >
                    Biofuel
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByTopic("policy");
                      setfilter("topic");
                    }}
                  >
                    Policy
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByTopic("economy");
                      setfilter("topic");
                    }}
                  >
                    Economy
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByTopic("food");
                      setfilter("topic");
                    }}
                  >
                    Food
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByTopic("unemployment");
                      setfilter("topic");
                    }}
                  >
                    Unemployment
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByTopic("robotics");
                      setfilter("topic");
                    }}
                  >
                    Robotics
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByTopic("trade");
                      setfilter("topic");
                    }}
                  >
                    Trade
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByTopic("demand");
                      setfilter("topic");
                    }}
                  >
                    Demand
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByTopic("capital");
                      setfilter("topic");
                    }}
                  >
                    Capital
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByTopic("terrorism");
                      setfilter("topic");
                    }}
                  >
                    Terrorism
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByTopic("growth");
                      setfilter("topic");
                    }}
                  >
                    Growth
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByTopic("transport");
                      setfilter("topic");
                    }}
                  >
                    Transport
                  </NavDropdown.Item>
                </DropdownSubmenu>
                <DropdownSubmenu
                  className="hover:cursor-pointer"
                  title="Pestle"
                >
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByPestle("Economic");
                      setfilter("pestle");
                    }}
                  >
                    Economic
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByPestle("Environmental");
                      setfilter("pestle");
                    }}
                  >
                    Environmental
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByPestle("Healthcare");
                      setfilter("pestle");
                    }}
                  >
                    Healthcare
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByPestle("Industries");
                      setfilter("pestle");
                    }}
                  >
                    Industries
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByPestle("Lifestyles");
                      setfilter("pestle");
                    }}
                  >
                    Lifestyles
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByPestle("Organization");
                      setfilter("pestle");
                    }}
                  >
                    Organization
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByPestle("Political");
                      setfilter("pestle");
                    }}
                  >
                    Political
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByPestle("Social");
                      setfilter("pestle");
                    }}
                  >
                    Social
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByPestle("Technological");
                      setfilter("pestle");
                    }}
                  >
                    Technological
                  </NavDropdown.Item>
                </DropdownSubmenu>
                <DropdownSubmenu
                  className="hover:cursor-pointer"
                  title="Sector"
                >
                  <NavDropdown.Item
                    onClick={() => {
                      fetchBySector("Automotive");
                      setfilter("sector");
                    }}
                  >
                    Automotive
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchBySector("Construction");
                      setfilter("sector");
                    }}
                  >
                    Construction
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchBySector("Energy");
                      setfilter("sector");
                    }}
                  >
                    Energy
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchBySector("Environment");
                      setfilter("sector");
                    }}
                  >
                    Environment
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchBySector("Financial services");
                      setfilter("sector");
                    }}
                  >
                    Financial services
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchBySector("Food & agriculture");
                      setfilter("sector");
                    }}
                  >
                    Food & agriculture
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchBySector("Government");
                      setfilter("sector");
                    }}
                  >
                    Government
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchBySector("Healthcare");
                      setfilter("sector");
                    }}
                  >
                    Healthcare
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchBySector("Information Technology");
                      setfilter("sector");
                    }}
                  >
                    Information Technology
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchBySector("Manufacturing");
                      setfilter("sector");
                    }}
                  >
                    Manufacturing
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchBySector("Media & entertainment");
                      setfilter("sector");
                    }}
                  >
                    Media & entertainment
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchBySector("Retail");
                      setfilter("sector");
                    }}
                  >
                    Retail
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchBySector("Security");
                      setfilter("sector");
                    }}
                  >
                    Security
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchBySector("Support services");
                      setfilter("sector");
                    }}
                  >
                    Support services
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchBySector("Tourism & hospitality");
                      setfilter("sector");
                    }}
                  >
                    Tourism & hospitality
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchBySector("Transport");
                      setfilter("sector");
                    }}
                  >
                    Transport
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchBySector("Water");
                      setfilter("sector");
                    }}
                  >
                    Water
                  </NavDropdown.Item>
                </DropdownSubmenu>
                <DropdownSubmenu
                  className="hover:cursor-pointer"
                  title="End Year"
                >
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByEndYear("3000");
                      setfilter("year");
                    }}
                  >
                    3000
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByEndYear("2040");
                      setfilter("year");
                    }}
                  >
                    2040
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByEndYear("2035");
                      setfilter("year");
                    }}
                  >
                    2035
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByEndYear("2030");
                      setfilter("year");
                    }}
                  >
                    2030
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByEndYear("2025");
                      setfilter("year");
                    }}
                  >
                    2025
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      fetchByEndYear("2020");
                      setfilter("year");
                    }}
                  >
                    2020
                  </NavDropdown.Item>
                </DropdownSubmenu>
              </NavDropdownMenu>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div
          className="mode hidden mr-3 lg:flex cursor-pointer"
          onClick={() => {
            mode === "light" ? setmode("dark") : setmode("light");
          }}
        >
          <CircumIcon name={mode} color={mode === "light" ? "dark" : "white"} />
        </div>
      </Navbar>
    </>
  );
};

export default Header;
