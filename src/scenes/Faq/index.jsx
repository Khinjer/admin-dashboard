import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";

import { tokens } from "../../theme";
import Header from "../../components/Header";
import Box from "@mui/material/Box";

function Faq() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Got a question?" subTitle="frequently asked questions" />
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="question1-content"
          id="question1-header"
        >
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="bold"
          >
            Question 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
          inventore aspernatur repellat quisquam, quae aut iusto a quidem dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
          inventore aspernatur repellat quisquam, quae aut iusto a quidem dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
          inventore aspernatur repellat quisquam, quae aut iusto a quidem dicta.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="question2-content"
          id="question2-header"
        >
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="bold"
          >
            Question 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
          inventore aspernatur repellat quisquam, quae aut iusto a quidem dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
          inventore aspernatur repellat quisquam, quae aut iusto a quidem dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
          inventore aspernatur repellat quisquam, quae aut iusto a quidem dicta.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="question3-content"
          id="question3-header"
        >
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="bold"
          >
            Question 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
          inventore aspernatur repellat quisquam, quae aut iusto a quidem dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
          inventore aspernatur repellat quisquam, quae aut iusto a quidem dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
          inventore aspernatur repellat quisquam, quae aut iusto a quidem dicta.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="question4-content"
          id="question4-header"
        >
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="bold"
          >
            Question 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
          inventore aspernatur repellat quisquam, quae aut iusto a quidem dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
          inventore aspernatur repellat quisquam, quae aut iusto a quidem dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
          inventore aspernatur repellat quisquam, quae aut iusto a quidem dicta.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="question5-content"
          id="question5-header"
        >
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="bold"
          >
            Question 5
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
          inventore aspernatur repellat quisquam, quae aut iusto a quidem dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
          inventore aspernatur repellat quisquam, quae aut iusto a quidem dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
          inventore aspernatur repellat quisquam, quae aut iusto a quidem dicta.
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Faq;
