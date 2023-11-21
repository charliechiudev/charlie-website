import React from "react";

import PageWrapper from "../components/PageWrapper";
import { Box, Head } from "../components/Core";
import Contact from "../sections/others/Contact";

const ContactPage = () => {
  return (
    <>
      <Head title={"Contact"} />
      <PageWrapper darkTheme>
        <Box pt={4}>
          <Contact />
        </Box>
      </PageWrapper>
    </>
  );
};

export default ContactPage;
