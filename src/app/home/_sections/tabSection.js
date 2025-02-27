"use client";
import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import Image from "next/image";
import Node from "@/_assets/pngs/NodeJs.png";
import Php from "@/_assets/pngs/PHP.png";
import Sql from "@/_assets/pngs/mysql.png";
import Java from "@/_assets/pngs/java.png";
import Net from "@/_assets/pngs/NetCore.png";
import Python from "@/_assets/pngs/Python.png";
import Mongo from "@/_assets/pngs/mongo.png";
import Go from "@/_assets/pngs/Go.png";
import Rails from "@/_assets/pngs/RubyOnRails.png";

export default function TabSection() {
  const [value, setValue] = useState("1");

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <Box
      sx={{
        padding: {
          xs: "20px",
          sm: "35px 60px",
          md: "50px 80px",
          lg: "50px 120px",
        },
      }}
    >
      <Box sx={{ maxWidth: "1400px", width: "100%", margin: "auto" }}>
        {/* <Box></Box> */}
        <Box sx={{ maxWidth: "1050px", width: "100%", margin: "auto" }}>
          <TabContext value={value}>
            <Box
              sx={{
                maxWidth: "700px",
                width: "100%",
                margin: "auto",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
              >
                <Tab label="Backend" value="1" />
                <Tab label="Frontend" value="2" />
                <Tab label="Databases" value="3" />
                <Tab label="CMS" value="4" />
                <Tab label="CloudTesting" value="5" />
                <Tab label="DevOps" value="6" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                <Image src={Node} alt="node" height={94} width={166} />
                <Image src={Php} alt="php" height={94} width={166} />
                <Image src={Sql} alt="sql" height={94} width={166} />
                <Image src={Java} alt="java" height={94} width={166} />
                <Image src={Net} alt="net" height={94} width={166} />
                <Image src={Python} alt="python" height={94} width={166} />
                <Image src={Rails} alt="rails" height={94} width={166} />
                <Image src={Go} alt="go" height={94} width={166} />
                <Image src={Mongo} alt="mongo" height={94} width={166} />
              </Box>
            </TabPanel>
            <TabPanel value="2">
              <Box>
                <Image src={Node} alt="node" height={94} width={166} />
                <Image src={Php} alt="php" height={94} width={166} />
                <Image src={Sql} alt="sql" height={94} width={166} />
                <Image src={Java} alt="java" height={94} width={166} />
                <Image src={Net} alt="net" height={94} width={166} />
                <Image src={Python} alt="python" height={94} width={166} />
                <Image src={Rails} alt="rails" height={94} width={166} />
                <Image src={Go} alt="go" height={94} width={166} />
              </Box>
            </TabPanel>
            <TabPanel value="3">
              <Box>
                <Image src={Node} alt="node" height={94} width={166} />
                <Image src={Sql} alt="sql" height={94} width={166} />
                <Image src={Java} alt="java" height={94} width={166} />
                <Image src={Net} alt="net" height={94} width={166} />
                <Image src={Python} alt="python" height={94} width={166} />
                <Image src={Rails} alt="rails" height={94} width={166} />
                <Image src={Go} alt="go" height={94} width={166} />
                <Image src={Mongo} alt="mongo" height={94} width={166} />
              </Box>
            </TabPanel>
            <TabPanel value="4">
              <Box>
                <Image src={Node} alt="node" height={94} width={166} />
                <Image src={Php} alt="php" height={94} width={166} />
                <Image src={Java} alt="java" height={94} width={166} />
                <Image src={Net} alt="net" height={94} width={166} />
                <Image src={Python} alt="python" height={94} width={166} />
                <Image src={Rails} alt="rails" height={94} width={166} />
                <Image src={Go} alt="go" height={94} width={166} />
                <Image src={Mongo} alt="mongo" height={94} width={166} />
              </Box>
            </TabPanel>
            <TabPanel value="5">
              <Box>
                <Image src={Node} alt="node" height={94} width={166} />
                <Image src={Php} alt="php" height={94} width={166} />
                <Image src={Sql} alt="sql" height={94} width={166} />
                <Image src={Java} alt="java" height={94} width={166} />
                <Image src={Python} alt="python" height={94} width={166} />
                <Image src={Rails} alt="rails" height={94} width={166} />
                <Image src={Go} alt="go" height={94} width={166} />
                <Image src={Mongo} alt="mongo" height={94} width={166} />
              </Box>
            </TabPanel>
            <TabPanel value="6">
              <Box>
                <Image src={Node} alt="node" height={94} width={166} />
                <Image src={Php} alt="php" height={94} width={166} />
                <Image src={Sql} alt="sql" height={94} width={166} />
                <Image src={Java} alt="java" height={94} width={166} />
                <Image src={Net} alt="net" height={94} width={166} />
                <Image src={Rails} alt="rails" height={94} width={166} />
                <Image src={Go} alt="go" height={94} width={166} />
                <Image src={Mongo} alt="mongo" height={94} width={166} />
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Box>
  );
}
