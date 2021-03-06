import { TableData } from "../PullTable/PullTable";
import { getItems } from "../../api/index";
import { intersect } from "mathjs";
let Dragos, Dragos1;
let primaIteratie = false;
export let me_vector = new Array(25).fill(0);
let definitDeja = false;
let diferenta;
let handleRefreshTableButtonClick = async () => {
  if (!primaIteratie) {
    console.log("Prima");
    Dragos = (await getItems()).data.Items;
    for (let i = 0; i < Dragos.length; i++) {
      me_vector[i] = {
        userID: Dragos[i].userID,
        noteID: Dragos[i].noteID,
      };
    }
    Dragos1 = Dragos;
    primaIteratie = true;
  } else {
    Dragos1 = (await getItems()).data.Items;
  }
  //gaseste diferenta
  for (let i = 0; i < Dragos.length; i++) {
    if (Dragos[i].userID != Dragos1[i].userID) {
      diferenta = {
        userID: Dragos1[i].userID,
        noteID: Dragos1[i].noteID,
      };
      Dragos = Dragos1;
      console.log("Diferenta la " + i);
      break;
    }
  }
  //trebuie adaugata diferenta in vector la elementul diferit de 0
  if (diferenta) {
    me_vector[Dragos1.length - 1] = {
      userID: diferenta.userID,
      noteID: diferenta.noteID,
    };
    diferenta = false;
  }
  console.log(Dragos);
  console.log(Dragos1);
  console.log(me_vector);
};

handleRefreshTableButtonClick();

let spreadSheetTable = {
  A1: { key: "A1", value: "", expr: "" },
  A2: { key: "A2", value: "", expr: "" },
  A3: { key: "A3", value: "", expr: "" },
  A4: { key: "A4", value: "", expr: "" },
  A5: { key: "A5", value: "", expr: "" },
  A6: { key: "A6", value: "", expr: "" },
  A7: { key: "A7", value: "", expr: "" },
  A8: { key: "A8", value: "", expr: "" },
  A9: { key: "A9", value: "", expr: "" },
  A10: { key: "A10", value: "", expr: "" },
  A11: { key: "A11", value: "", expr: "" },
  A12: { key: "A12", value: "", expr: "" },
  A13: { key: "A13", value: "", expr: "" },
  A14: { key: "A14", value: "", expr: "" },
  A15: { key: "A15", value: "", expr: "" },
  A16: { key: "A16", value: "", expr: "" },
  A17: { key: "A17", value: "", expr: "" },
  A18: { key: "A18", value: "", expr: "" },
  A19: { key: "A19", value: "", expr: "" },
  A20: { key: "A20", value: "", expr: "" },
  A21: { key: "A21", value: "", expr: "" },
  A22: { key: "A22", value: "", expr: "" },
  A23: { key: "A23", value: "", expr: "" },
  A24: { key: "A24", value: "", expr: "" },
  A25: { key: "A25", value: "", expr: "" },
  B1: { key: "B1", value: "", expr: "" },
  B2: { key: "B2", value: "", expr: "" },
  B3: { key: "B3", value: "", expr: "" },
  B4: { key: "B4", value: "", expr: "" },
  B5: { key: "B5", value: "", expr: "" },
  B6: { key: "B6", value: "", expr: "" },
  B7: { key: "B7", value: "", expr: "" },
  B8: { key: "B8", value: "", expr: "" },
  B9: { key: "B9", value: "", expr: "" },
  B10: { key: "B10", value: "", expr: "" },
  B11: { key: "B11", value: "", expr: "" },
  B12: { key: "B12", value: "", expr: "" },
  B13: { key: "B13", value: "", expr: "" },
  B14: { key: "B14", value: "", expr: "" },
  B15: { key: "B15", value: "", expr: "" },
  B16: { key: "B16", value: "", expr: "" },
  B17: { key: "B17", value: "", expr: "" },
  B18: { key: "B18", value: "", expr: "" },
  B19: { key: "B19", value: "", expr: "" },
  B20: { key: "B20", value: "", expr: "" },
  B21: { key: "B21", value: "", expr: "" },
  B22: { key: "B22", value: "", expr: "" },
  B23: { key: "B23", value: "", expr: "" },
  B24: { key: "B24", value: "", expr: "" },
  B25: { key: "B25", value: "", expr: "" },
  C1: { key: "C1", value: "", expr: "" },
  C2: { key: "C2", value: "", expr: "" },
  C3: { key: "C3", value: "", expr: "" },
  C4: { key: "C4", value: "", expr: "" },
  C5: { key: "C5", value: "", expr: "" },
  C6: { key: "C6", value: "", expr: "" },
  C7: { key: "C7", value: "", expr: "" },
  C8: { key: "C8", value: "", expr: "" },
  C9: { key: "C9", value: "", expr: "" },
  C10: { key: "C10", value: "", expr: "" },
  C11: { key: "C11", value: "", expr: "" },
  C12: { key: "C12", value: "", expr: "" },
  C13: { key: "C13", value: "", expr: "" },
  C14: { key: "C14", value: "", expr: "" },
  C15: { key: "C15", value: "", expr: "" },
  C16: { key: "C16", value: "", expr: "" },
  C17: { key: "C17", value: "", expr: "" },
  C18: { key: "C18", value: "", expr: "" },
  C19: { key: "C19", value: "", expr: "" },
  C20: { key: "C20", value: "", expr: "" },
  C21: { key: "C21", value: "", expr: "" },
  C22: { key: "C22", value: "", expr: "" },
  C23: { key: "C23", value: "", expr: "" },
  C24: { key: "C24", value: "", expr: "" },
  C25: { key: "C25", value: "", expr: "" },
  D1: { key: "D1", value: "", expr: "" },
  D2: { key: "D2", value: "", expr: "" },
  D3: { key: "D3", value: "", expr: "" },
  D4: { key: "D4", value: "", expr: "" },
  D5: { key: "D5", value: "", expr: "" },
  D6: { key: "D6", value: "", expr: "" },
  D7: { key: "D7", value: "", expr: "" },
  D8: { key: "D8", value: "", expr: "" },
  D9: { key: "D9", value: "", expr: "" },
  D10: { key: "D10", value: "", expr: "" },
  D11: { key: "D11", value: "", expr: "" },
  D12: { key: "D12", value: "", expr: "" },
  D13: { key: "D13", value: "", expr: "" },
  D14: { key: "D14", value: "", expr: "" },
  D15: { key: "D15", value: "", expr: "" },
  D16: { key: "D16", value: "", expr: "" },
  D17: { key: "D17", value: "", expr: "" },
  D18: { key: "D18", value: "", expr: "" },
  D19: { key: "D19", value: "", expr: "" },
  D20: { key: "D20", value: "", expr: "" },
  D21: { key: "D21", value: "", expr: "" },
  D22: { key: "D22", value: "", expr: "" },
  D23: { key: "D23", value: "", expr: "" },
  D24: { key: "D24", value: "", expr: "" },
  D25: { key: "D25", value: "", expr: "" },
  E1: { key: "E1", value: "", expr: "" },
  E2: { key: "E2", value: "", expr: "" },
  E3: { key: "E3", value: "", expr: "" },
  E4: { key: "E4", value: "", expr: "" },
  E5: { key: "E5", value: "", expr: "" },
  E6: { key: "E6", value: "", expr: "" },
  E7: { key: "E7", value: "", expr: "" },
  E8: { key: "E8", value: "", expr: "" },
  E9: { key: "E9", value: "", expr: "" },
  E10: { key: "E10", value: "", expr: "" },
  E11: { key: "E11", value: "", expr: "" },
  E12: { key: "E12", value: "", expr: "" },
  E13: { key: "E13", value: "", expr: "" },
  E14: { key: "E14", value: "", expr: "" },
  E15: { key: "E15", value: "", expr: "" },
  E16: { key: "E16", value: "", expr: "" },
  E17: { key: "E17", value: "", expr: "" },
  E18: { key: "E18", value: "", expr: "" },
  E19: { key: "E19", value: "", expr: "" },
  E20: { key: "E20", value: "", expr: "" },
  E21: { key: "E21", value: "", expr: "" },
  E22: { key: "E22", value: "", expr: "" },
  E23: { key: "E23", value: "", expr: "" },
  E24: { key: "E24", value: "", expr: "" },
  E25: { key: "E25", value: "", expr: "" },
  F1: { key: "F1", value: "", expr: "" },
  F2: { key: "F2", value: "", expr: "" },
  F3: { key: "F3", value: "", expr: "" },
  F4: { key: "F4", value: "", expr: "" },
  F5: { key: "F5", value: "", expr: "" },
  F6: { key: "F6", value: "", expr: "" },
  F7: { key: "F7", value: "", expr: "" },
  F8: { key: "F8", value: "", expr: "" },
  F9: { key: "F9", value: "", expr: "" },
  F10: { key: "F10", value: "", expr: "" },
  F11: { key: "F11", value: "", expr: "" },
  F12: { key: "F12", value: "", expr: "" },
  F13: { key: "F13", value: "", expr: "" },
  F14: { key: "F14", value: "", expr: "" },
  F15: { key: "F15", value: "", expr: "" },
  F16: { key: "F16", value: "", expr: "" },
  F17: { key: "F17", value: "", expr: "" },
  F18: { key: "F18", value: "", expr: "" },
  F19: { key: "F19", value: "", expr: "" },
  F20: { key: "F20", value: "", expr: "" },
  F21: { key: "F21", value: "", expr: "" },
  F22: { key: "F22", value: "", expr: "" },
  F23: { key: "F23", value: "", expr: "" },
  F24: { key: "F24", value: "", expr: "" },
  F25: { key: "F25", value: "", expr: "" },
  G1: { key: "G1", value: "", expr: "" },
  G2: { key: "G2", value: "", expr: "" },
  G3: { key: "G3", value: "", expr: "" },
  G4: { key: "G4", value: "", expr: "" },
  G5: { key: "G5", value: "", expr: "" },
  G6: { key: "G6", value: "", expr: "" },
  G7: { key: "G7", value: "", expr: "" },
  G8: { key: "G8", value: "", expr: "" },
  G9: { key: "G9", value: "", expr: "" },
  G10: { key: "G10", value: "", expr: "" },
  G11: { key: "G11", value: "", expr: "" },
  G12: { key: "G12", value: "", expr: "" },
  G13: { key: "G13", value: "", expr: "" },
  G14: { key: "G14", value: "", expr: "" },
  G15: { key: "G15", value: "", expr: "" },
  G16: { key: "G16", value: "", expr: "" },
  G17: { key: "G17", value: "", expr: "" },
  G18: { key: "G18", value: "", expr: "" },
  G19: { key: "G19", value: "", expr: "" },
  G20: { key: "G20", value: "", expr: "" },
  G21: { key: "G21", value: "", expr: "" },
  G22: { key: "G22", value: "", expr: "" },
  G23: { key: "G23", value: "", expr: "" },
  G24: { key: "G24", value: "", expr: "" },
  G25: { key: "G25", value: "", expr: "" },
  H1: { key: "H1", value: "", expr: "" },
  H2: { key: "H2", value: "", expr: "" },
  H3: { key: "H3", value: "", expr: "" },
  H4: { key: "H4", value: "", expr: "" },
  H5: { key: "H5", value: "", expr: "" },
  H6: { key: "H6", value: "", expr: "" },
  H7: { key: "H7", value: "", expr: "" },
  H8: { key: "H8", value: "", expr: "" },
  H9: { key: "H9", value: "", expr: "" },
  H10: { key: "H10", value: "", expr: "" },
  H11: { key: "H11", value: "", expr: "" },
  H12: { key: "H12", value: "", expr: "" },
  H13: { key: "H13", value: "", expr: "" },
  H14: { key: "H14", value: "", expr: "" },
  H15: { key: "H15", value: "", expr: "" },
  H16: { key: "H16", value: "", expr: "" },
  H17: { key: "H17", value: "", expr: "" },
  H18: { key: "H18", value: "", expr: "" },
  H19: { key: "H19", value: "", expr: "" },
  H20: { key: "H20", value: "", expr: "" },
  H21: { key: "H21", value: "", expr: "" },
  H22: { key: "H22", value: "", expr: "" },
  H23: { key: "H23", value: "", expr: "" },
  H24: { key: "H24", value: "", expr: "" },
  H25: { key: "H25", value: "", expr: "" },
  I1: { key: "I1", value: "", expr: "" },
  I2: { key: "I2", value: "", expr: "" },
  I3: { key: "I3", value: "", expr: "" },
  I4: { key: "I4", value: "", expr: "" },
  I5: { key: "I5", value: "", expr: "" },
  I6: { key: "I6", value: "", expr: "" },
  I7: { key: "I7", value: "", expr: "" },
  I8: { key: "I8", value: "", expr: "" },
  I9: { key: "I9", value: "", expr: "" },
  I10: { key: "I10", value: "", expr: "" },
  I11: { key: "I11", value: "", expr: "" },
  I12: { key: "I12", value: "", expr: "" },
  I13: { key: "I13", value: "", expr: "" },
  I14: { key: "I14", value: "", expr: "" },
  I15: { key: "I15", value: "", expr: "" },
  I16: { key: "I16", value: "", expr: "" },
  I17: { key: "I17", value: "", expr: "" },
  I18: { key: "I18", value: "", expr: "" },
  I19: { key: "I19", value: "", expr: "" },
  I20: { key: "I20", value: "", expr: "" },
  I21: { key: "I21", value: "", expr: "" },
  I22: { key: "I22", value: "", expr: "" },
  I23: { key: "I23", value: "", expr: "" },
  I24: { key: "I24", value: "", expr: "" },
  I25: { key: "I25", value: "", expr: "" },
  J1: { key: "J1", value: "", expr: "" },
  J2: { key: "J2", value: "", expr: "" },
  J3: { key: "J3", value: "", expr: "" },
  J4: { key: "J4", value: "", expr: "" },
  J5: { key: "J5", value: "", expr: "" },
  J6: { key: "J6", value: "", expr: "" },
  J7: { key: "J7", value: "", expr: "" },
  J8: { key: "J8", value: "", expr: "" },
  J9: { key: "J9", value: "", expr: "" },
  J10: { key: "J10", value: "", expr: "" },
  J11: { key: "J11", value: "", expr: "" },
  J12: { key: "J12", value: "", expr: "" },
  J13: { key: "J13", value: "", expr: "" },
  J14: { key: "J14", value: "", expr: "" },
  J15: { key: "J15", value: "", expr: "" },
  J16: { key: "J16", value: "", expr: "" },
  J17: { key: "J17", value: "", expr: "" },
  J18: { key: "J18", value: "", expr: "" },
  J19: { key: "J19", value: "", expr: "" },
  J20: { key: "J20", value: "", expr: "" },
  J21: { key: "J21", value: "", expr: "" },
  J22: { key: "J22", value: "", expr: "" },
  J23: { key: "J23", value: "", expr: "" },
  J24: { key: "J24", value: "", expr: "" },
  J25: { key: "J25", value: "", expr: "" },
  K1: { key: "K1", value: "", expr: "" },
  K2: { key: "K2", value: "", expr: "" },
  K3: { key: "K3", value: "", expr: "" },
  K4: { key: "K4", value: "", expr: "" },
  K5: { key: "K5", value: "", expr: "" },
  K6: { key: "K6", value: "", expr: "" },
  K7: { key: "K7", value: "", expr: "" },
  K8: { key: "K8", value: "", expr: "" },
  K9: { key: "K9", value: "", expr: "" },
  K10: { key: "K10", value: "", expr: "" },
  K11: { key: "K11", value: "", expr: "" },
  K12: { key: "K12", value: "", expr: "" },
  K13: { key: "K13", value: "", expr: "" },
  K14: { key: "K14", value: "", expr: "" },
  K15: { key: "K15", value: "", expr: "" },
  K16: { key: "K16", value: "", expr: "" },
  K17: { key: "K17", value: "", expr: "" },
  K18: { key: "K18", value: "", expr: "" },
  K19: { key: "K19", value: "", expr: "" },
  K20: { key: "K20", value: "", expr: "" },
  K21: { key: "K21", value: "", expr: "" },
  K22: { key: "K22", value: "", expr: "" },
  K23: { key: "K23", value: "", expr: "" },
  K24: { key: "K24", value: "", expr: "" },
  K25: { key: "K25", value: "", expr: "" },
  L1: { key: "L1", value: "", expr: "" },
  L2: { key: "L2", value: "", expr: "" },
  L3: { key: "L3", value: "", expr: "" },
  L4: { key: "L4", value: "", expr: "" },
  L5: { key: "L5", value: "", expr: "" },
  L6: { key: "L6", value: "", expr: "" },
  L7: { key: "L7", value: "", expr: "" },
  L8: { key: "L8", value: "", expr: "" },
  L9: { key: "L9", value: "", expr: "" },
  L10: { key: "L10", value: "", expr: "" },
  L11: { key: "L11", value: "", expr: "" },
  L12: { key: "L12", value: "", expr: "" },
  L13: { key: "L13", value: "", expr: "" },
  L14: { key: "L14", value: "", expr: "" },
  L15: { key: "L15", value: "", expr: "" },
  L16: { key: "L16", value: "", expr: "" },
  L17: { key: "L17", value: "", expr: "" },
  L18: { key: "L18", value: "", expr: "" },
  L19: { key: "L19", value: "", expr: "" },
  L20: { key: "L20", value: "", expr: "" },
  L21: { key: "L21", value: "", expr: "" },
  L22: { key: "L22", value: "", expr: "" },
  L23: { key: "L23", value: "", expr: "" },
  L24: { key: "L24", value: "", expr: "" },
  L25: { key: "L25", value: "", expr: "" },
  M1: { key: "M1", value: "", expr: "" },
  M2: { key: "M2", value: "", expr: "" },
  M3: { key: "M3", value: "", expr: "" },
  M4: { key: "M4", value: "", expr: "" },
  M5: { key: "M5", value: "", expr: "" },
  M6: { key: "M6", value: "", expr: "" },
  M7: { key: "M7", value: "", expr: "" },
  M8: { key: "M8", value: "", expr: "" },
  M9: { key: "M9", value: "", expr: "" },
  M10: { key: "M10", value: "", expr: "" },
  M11: { key: "M11", value: "", expr: "" },
  M12: { key: "M12", value: "", expr: "" },
  M13: { key: "M13", value: "", expr: "" },
  M14: { key: "M14", value: "", expr: "" },
  M15: { key: "M15", value: "", expr: "" },
  M16: { key: "M16", value: "", expr: "" },
  M17: { key: "M17", value: "", expr: "" },
  M18: { key: "M18", value: "", expr: "" },
  M19: { key: "M19", value: "", expr: "" },
  M20: { key: "M20", value: "", expr: "" },
  M21: { key: "M21", value: "", expr: "" },
  M22: { key: "M22", value: "", expr: "" },
  M23: { key: "M23", value: "", expr: "" },
  M24: { key: "M24", value: "", expr: "" },
  M25: { key: "M25", value: "", expr: "" },
  N1: { key: "N1", value: "", expr: "" },
  N2: { key: "N2", value: "", expr: "" },
  N3: { key: "N3", value: "", expr: "" },
  N4: { key: "N4", value: "", expr: "" },
  N5: { key: "N5", value: "", expr: "" },
  N6: { key: "N6", value: "", expr: "" },
  N7: { key: "N7", value: "", expr: "" },
  N8: { key: "N8", value: "", expr: "" },
  N9: { key: "N9", value: "", expr: "" },
  N10: { key: "N10", value: "", expr: "" },
  N11: { key: "N11", value: "", expr: "" },
  N12: { key: "N12", value: "", expr: "" },
  N13: { key: "N13", value: "", expr: "" },
  N14: { key: "N14", value: "", expr: "" },
  N15: { key: "N15", value: "", expr: "" },
  N16: { key: "N16", value: "", expr: "" },
  N17: { key: "N17", value: "", expr: "" },
  N18: { key: "N18", value: "", expr: "" },
  N19: { key: "N19", value: "", expr: "" },
  N20: { key: "N20", value: "", expr: "" },
  N21: { key: "N21", value: "", expr: "" },
  N22: { key: "N22", value: "", expr: "" },
  N23: { key: "N23", value: "", expr: "" },
  N24: { key: "N24", value: "", expr: "" },
  N25: { key: "N25", value: "", expr: "" },
  O1: { key: "O1", value: "", expr: "" },
  O2: { key: "O2", value: "", expr: "" },
  O3: { key: "O3", value: "", expr: "" },
  O4: { key: "O4", value: "", expr: "" },
  O5: { key: "O5", value: "", expr: "" },
  O6: { key: "O6", value: "", expr: "" },
  O7: { key: "O7", value: "", expr: "" },
  O8: { key: "O8", value: "", expr: "" },
  O9: { key: "O9", value: "", expr: "" },
  O10: { key: "O10", value: "", expr: "" },
  O11: { key: "O11", value: "", expr: "" },
  O12: { key: "O12", value: "", expr: "" },
  O13: { key: "O13", value: "", expr: "" },
  O14: { key: "O14", value: "", expr: "" },
  O15: { key: "O15", value: "", expr: "" },
  O16: { key: "O16", value: "", expr: "" },
  O17: { key: "O17", value: "", expr: "" },
  O18: { key: "O18", value: "", expr: "" },
  O19: { key: "O19", value: "", expr: "" },
  O20: { key: "O20", value: "", expr: "" },
  O21: { key: "O21", value: "", expr: "" },
  O22: { key: "O22", value: "", expr: "" },
  O23: { key: "O23", value: "", expr: "" },
  O24: { key: "O24", value: "", expr: "" },
  O25: { key: "O25", value: "", expr: "" },
  P1: { key: "P1", value: "", expr: "" },
  P2: { key: "P2", value: "", expr: "" },
  P3: { key: "P3", value: "", expr: "" },
  P4: { key: "P4", value: "", expr: "" },
  P5: { key: "P5", value: "", expr: "" },
  P6: { key: "P6", value: "", expr: "" },
  P7: { key: "P7", value: "", expr: "" },
  P8: { key: "P8", value: "", expr: "" },
  P9: { key: "P9", value: "", expr: "" },
  P10: { key: "P10", value: "", expr: "" },
  P11: { key: "P11", value: "", expr: "" },
  P12: { key: "P12", value: "", expr: "" },
  P13: { key: "P13", value: "", expr: "" },
  P14: { key: "P14", value: "", expr: "" },
  P15: { key: "P15", value: "", expr: "" },
  P16: { key: "P16", value: "", expr: "" },
  P17: { key: "P17", value: "", expr: "" },
  P18: { key: "P18", value: "", expr: "" },
  P19: { key: "P19", value: "", expr: "" },
  P20: { key: "P20", value: "", expr: "" },
  P21: { key: "P21", value: "", expr: "" },
  P22: { key: "P22", value: "", expr: "" },
  P23: { key: "P23", value: "", expr: "" },
  P24: { key: "P24", value: "", expr: "" },
  P25: { key: "P25", value: "", expr: "" },
  Q1: { key: "Q1", value: "", expr: "" },
  Q2: { key: "Q2", value: "", expr: "" },
  Q3: { key: "Q3", value: "", expr: "" },
  Q4: { key: "Q4", value: "", expr: "" },
  Q5: { key: "Q5", value: "", expr: "" },
  Q6: { key: "Q6", value: "", expr: "" },
  Q7: { key: "Q7", value: "", expr: "" },
  Q8: { key: "Q8", value: "", expr: "" },
  Q9: { key: "Q9", value: "", expr: "" },
  Q10: { key: "Q10", value: "", expr: "" },
  Q11: { key: "Q11", value: "", expr: "" },
  Q12: { key: "Q12", value: "", expr: "" },
  Q13: { key: "Q13", value: "", expr: "" },
  Q14: { key: "Q14", value: "", expr: "" },
  Q15: { key: "Q15", value: "", expr: "" },
  Q16: { key: "Q16", value: "", expr: "" },
  Q17: { key: "Q17", value: "", expr: "" },
  Q18: { key: "Q18", value: "", expr: "" },
  Q19: { key: "Q19", value: "", expr: "" },
  Q20: { key: "Q20", value: "", expr: "" },
  Q21: { key: "Q21", value: "", expr: "" },
  Q22: { key: "Q22", value: "", expr: "" },
  Q23: { key: "Q23", value: "", expr: "" },
  Q24: { key: "Q24", value: "", expr: "" },
  Q25: { key: "Q25", value: "", expr: "" },
  R1: { key: "R1", value: "", expr: "" },
  R2: { key: "R2", value: "", expr: "" },
  R3: { key: "R3", value: "", expr: "" },
  R4: { key: "R4", value: "", expr: "" },
  R5: { key: "R5", value: "", expr: "" },
  R6: { key: "R6", value: "", expr: "" },
  R7: { key: "R7", value: "", expr: "" },
  R8: { key: "R8", value: "", expr: "" },
  R9: { key: "R9", value: "", expr: "" },
  R10: { key: "R10", value: "", expr: "" },
  R11: { key: "R11", value: "", expr: "" },
  R12: { key: "R12", value: "", expr: "" },
  R13: { key: "R13", value: "", expr: "" },
  R14: { key: "R14", value: "", expr: "" },
  R15: { key: "R15", value: "", expr: "" },
  R16: { key: "R16", value: "", expr: "" },
  R17: { key: "R17", value: "", expr: "" },
  R18: { key: "R18", value: "", expr: "" },
  R19: { key: "R19", value: "", expr: "" },
  R20: { key: "R20", value: "", expr: "" },
  R21: { key: "R21", value: "", expr: "" },
  R22: { key: "R22", value: "", expr: "" },
  R23: { key: "R23", value: "", expr: "" },
  R24: { key: "R24", value: "", expr: "" },
  R25: { key: "R25", value: "", expr: "" },
  S1: { key: "S1", value: "", expr: "" },
  S2: { key: "S2", value: "", expr: "" },
  S3: { key: "S3", value: "", expr: "" },
  S4: { key: "S4", value: "", expr: "" },
  S5: { key: "S5", value: "", expr: "" },
  S6: { key: "S6", value: "", expr: "" },
  S7: { key: "S7", value: "", expr: "" },
  S8: { key: "S8", value: "", expr: "" },
  S9: { key: "S9", value: "", expr: "" },
  S10: { key: "S10", value: "", expr: "" },
  S11: { key: "S11", value: "", expr: "" },
  S12: { key: "S12", value: "", expr: "" },
  S13: { key: "S13", value: "", expr: "" },
  S14: { key: "S14", value: "", expr: "" },
  S15: { key: "S15", value: "", expr: "" },
  S16: { key: "S16", value: "", expr: "" },
  S17: { key: "S17", value: "", expr: "" },
  S18: { key: "S18", value: "", expr: "" },
  S19: { key: "S19", value: "", expr: "" },
  S20: { key: "S20", value: "", expr: "" },
  S21: { key: "S21", value: "", expr: "" },
  S22: { key: "S22", value: "", expr: "" },
  S23: { key: "S23", value: "", expr: "" },
  S24: { key: "S24", value: "", expr: "" },
  S25: { key: "S25", value: "", expr: "" },
  T1: { key: "T1", value: "", expr: "" },
  T2: { key: "T2", value: "", expr: "" },
  T3: { key: "T3", value: "", expr: "" },
  T4: { key: "T4", value: "", expr: "" },
  T5: { key: "T5", value: "", expr: "" },
  T6: { key: "T6", value: "", expr: "" },
  T7: { key: "T7", value: "", expr: "" },
  T8: { key: "T8", value: "", expr: "" },
  T9: { key: "T9", value: "", expr: "" },
  T10: { key: "T10", value: "", expr: "" },
  T11: { key: "T11", value: "", expr: "" },
  T12: { key: "T12", value: "", expr: "" },
  T13: { key: "T13", value: "", expr: "" },
  T14: { key: "T14", value: "", expr: "" },
  T15: { key: "T15", value: "", expr: "" },
  T16: { key: "T16", value: "", expr: "" },
  T17: { key: "T17", value: "", expr: "" },
  T18: { key: "T18", value: "", expr: "" },
  T19: { key: "T19", value: "", expr: "" },
  T20: { key: "T20", value: "", expr: "" },
  T21: { key: "T21", value: "", expr: "" },
  T22: { key: "T22", value: "", expr: "" },
  T23: { key: "T23", value: "", expr: "" },
  T24: { key: "T24", value: "", expr: "" },
  T25: { key: "T25", value: "", expr: "" },
  U1: { key: "U1", value: "", expr: "" },
  U2: { key: "U2", value: "", expr: "" },
  U3: { key: "U3", value: "", expr: "" },
  U4: { key: "U4", value: "", expr: "" },
  U5: { key: "U5", value: "", expr: "" },
  U6: { key: "U6", value: "", expr: "" },
  U7: { key: "U7", value: "", expr: "" },
  U8: { key: "U8", value: "", expr: "" },
  U9: { key: "U9", value: "", expr: "" },
  U10: { key: "U10", value: "", expr: "" },
  U11: { key: "U11", value: "", expr: "" },
  U12: { key: "U12", value: "", expr: "" },
  U13: { key: "U13", value: "", expr: "" },
  U14: { key: "U14", value: "", expr: "" },
  U15: { key: "U15", value: "", expr: "" },
  U16: { key: "U16", value: "", expr: "" },
  U17: { key: "U17", value: "", expr: "" },
  U18: { key: "U18", value: "", expr: "" },
  U19: { key: "U19", value: "", expr: "" },
  U20: { key: "U20", value: "", expr: "" },
  U21: { key: "U21", value: "", expr: "" },
  U22: { key: "U22", value: "", expr: "" },
  U23: { key: "U23", value: "", expr: "" },
  U24: { key: "U24", value: "", expr: "" },
  U25: { key: "U25", value: "", expr: "" },
  V1: { key: "V1", value: "", expr: "" },
  V2: { key: "V2", value: "", expr: "" },
  V3: { key: "V3", value: "", expr: "" },
  V4: { key: "V4", value: "", expr: "" },
  V5: { key: "V5", value: "", expr: "" },
  V6: { key: "V6", value: "", expr: "" },
  V7: { key: "V7", value: "", expr: "" },
  V8: { key: "V8", value: "", expr: "" },
  V9: { key: "V9", value: "", expr: "" },
  V10: { key: "V10", value: "", expr: "" },
  V11: { key: "V11", value: "", expr: "" },
  V12: { key: "V12", value: "", expr: "" },
  V13: { key: "V13", value: "", expr: "" },
  V14: { key: "V14", value: "", expr: "" },
  V15: { key: "V15", value: "", expr: "" },
  V16: { key: "V16", value: "", expr: "" },
  V17: { key: "V17", value: "", expr: "" },
  V18: { key: "V18", value: "", expr: "" },
  V19: { key: "V19", value: "", expr: "" },
  V20: { key: "V20", value: "", expr: "" },
  V21: { key: "V21", value: "", expr: "" },
  V22: { key: "V22", value: "", expr: "" },
  V23: { key: "V23", value: "", expr: "" },
  V24: { key: "V24", value: "", expr: "" },
  V25: { key: "V25", value: "", expr: "" },
  W1: { key: "W1", value: "", expr: "" },
  W2: { key: "W2", value: "", expr: "" },
  W3: { key: "W3", value: "", expr: "" },
  W4: { key: "W4", value: "", expr: "" },
  W5: { key: "W5", value: "", expr: "" },
  W6: { key: "W6", value: "", expr: "" },
  W7: { key: "W7", value: "", expr: "" },
  W8: { key: "W8", value: "", expr: "" },
  W9: { key: "W9", value: "", expr: "" },
  W10: { key: "W10", value: "", expr: "" },
  W11: { key: "W11", value: "", expr: "" },
  W12: { key: "W12", value: "", expr: "" },
  W13: { key: "W13", value: "", expr: "" },
  W14: { key: "W14", value: "", expr: "" },
  W15: { key: "W15", value: "", expr: "" },
  W16: { key: "W16", value: "", expr: "" },
  W17: { key: "W17", value: "", expr: "" },
  W18: { key: "W18", value: "", expr: "" },
  W19: { key: "W19", value: "", expr: "" },
  W20: { key: "W20", value: "", expr: "" },
  W21: { key: "W21", value: "", expr: "" },
  W22: { key: "W22", value: "", expr: "" },
  W23: { key: "W23", value: "", expr: "" },
  W24: { key: "W24", value: "", expr: "" },
  W25: { key: "W25", value: "", expr: "" },
  X1: { key: "X1", value: "", expr: "" },
  X2: { key: "X2", value: "", expr: "" },
  X3: { key: "X3", value: "", expr: "" },
  X4: { key: "X4", value: "", expr: "" },
  X5: { key: "X5", value: "", expr: "" },
  X6: { key: "X6", value: "", expr: "" },
  X7: { key: "X7", value: "", expr: "" },
  X8: { key: "X8", value: "", expr: "" },
  X9: { key: "X9", value: "", expr: "" },
  X10: { key: "X10", value: "", expr: "" },
  X11: { key: "X11", value: "", expr: "" },
  X12: { key: "X12", value: "", expr: "" },
  X13: { key: "X13", value: "", expr: "" },
  X14: { key: "X14", value: "", expr: "" },
  X15: { key: "X15", value: "", expr: "" },
  X16: { key: "X16", value: "", expr: "" },
  X17: { key: "X17", value: "", expr: "" },
  X18: { key: "X18", value: "", expr: "" },
  X19: { key: "X19", value: "", expr: "" },
  X20: { key: "X20", value: "", expr: "" },
  X21: { key: "X21", value: "", expr: "" },
  X22: { key: "X22", value: "", expr: "" },
  X23: { key: "X23", value: "", expr: "" },
  X24: { key: "X24", value: "", expr: "" },
  X25: { key: "X25", value: "", expr: "" },
  Y1: { key: "Y1", value: "", expr: "" },
  Y2: { key: "Y2", value: "", expr: "" },
  Y3: { key: "Y3", value: "", expr: "" },
  Y4: { key: "Y4", value: "", expr: "" },
  Y5: { key: "Y5", value: "", expr: "" },
  Y6: { key: "Y6", value: "", expr: "" },
  Y7: { key: "Y7", value: "", expr: "" },
  Y8: { key: "Y8", value: "", expr: "" },
  Y9: { key: "Y9", value: "", expr: "" },
  Y10: { key: "Y10", value: "", expr: "" },
  Y11: { key: "Y11", value: "", expr: "" },
  Y12: { key: "Y12", value: "", expr: "" },
  Y13: { key: "Y13", value: "", expr: "" },
  Y14: { key: "Y14", value: "", expr: "" },
  Y15: { key: "Y15", value: "", expr: "" },
  Y16: { key: "Y16", value: "", expr: "" },
  Y17: { key: "Y17", value: "", expr: "" },
  Y18: { key: "Y18", value: "", expr: "" },
  Y19: { key: "Y19", value: "", expr: "" },
  Y20: { key: "Y20", value: "", expr: "" },
  Y21: { key: "Y21", value: "", expr: "" },
  Y22: { key: "Y22", value: "", expr: "" },
  Y23: { key: "Y23", value: "", expr: "" },
  Y24: { key: "Y24", value: "", expr: "" },
  Y25: { key: "Y25", value: "", expr: "" },
  Z1: { key: "Z1", value: "", expr: "" },
  Z2: { key: "Z2", value: "", expr: "" },
  Z3: { key: "Z3", value: "", expr: "" },
  Z4: { key: "Z4", value: "", expr: "" },
  Z5: { key: "Z5", value: "", expr: "" },
  Z6: { key: "Z6", value: "", expr: "" },
  Z7: { key: "Z7", value: "", expr: "" },
  Z8: { key: "Z8", value: "", expr: "" },
  Z9: { key: "Z9", value: "", expr: "" },
  Z10: { key: "Z10", value: "", expr: "" },
  Z11: { key: "Z11", value: "", expr: "" },
  Z12: { key: "Z12", value: "", expr: "" },
  Z13: { key: "Z13", value: "", expr: "" },
  Z14: { key: "Z14", value: "", expr: "" },
  Z15: { key: "Z15", value: "", expr: "" },
  Z16: { key: "Z16", value: "", expr: "" },
  Z17: { key: "Z17", value: "", expr: "" },
  Z18: { key: "Z18", value: "", expr: "" },
  Z19: { key: "Z19", value: "", expr: "" },
  Z20: { key: "Z20", value: "", expr: "" },
  Z21: { key: "Z21", value: "", expr: "" },
  Z22: { key: "Z22", value: "", expr: "" },
  Z23: { key: "Z23", value: "", expr: "" },
  Z24: { key: "Z24", value: "", expr: "" },
  Z25: { key: "Z25", value: "", expr: "" },
};
setInterval(function () {
  handleRefreshTableButtonClick();
  try {
    spreadSheetTable.Z1.value = me_vector[0].noteID;
  } catch {
    spreadSheetTable.Z1.value = me_vector[0];
  }
  try {
    spreadSheetTable.Z2.value = me_vector[1].noteID;
  } catch {
    spreadSheetTable.Z2.value = me_vector[1];
  }
  try {
    spreadSheetTable.Z3.value = me_vector[2].noteID;
  } catch {
    spreadSheetTable.Z3.value = me_vector[2];
  }
  try {
    spreadSheetTable.Z4.value = me_vector[3].noteID;
  } catch {
    spreadSheetTable.Z4.value = me_vector[3];
  }
  try {
    spreadSheetTable.Z5.value = me_vector[4].noteID;
  } catch {
    spreadSheetTable.Z5.value = me_vector[4];
  }
  try {
    spreadSheetTable.Z6.value = me_vector[5].noteID;
  } catch {
    spreadSheetTable.Z6.value = me_vector[5];
  }
  try {
    spreadSheetTable.Z7.value = me_vector[6].noteID;
  } catch {
    spreadSheetTable.Z7.value = me_vector[6];
  }
  try {
    spreadSheetTable.Z8.value = me_vector[7].noteID;
  } catch {
    spreadSheetTable.Z8.value = me_vector[7];
  }
  try {
    spreadSheetTable.Z9.value = me_vector[8].noteID;
  } catch {
    spreadSheetTable.Z9.value = me_vector[8];
  }
  try {
    spreadSheetTable.Z10.value = me_vector[9].noteID;
  } catch {
    spreadSheetTable.Z10.value = me_vector[9];
  }
  try {
    spreadSheetTable.Z11.value = me_vector[10].noteID;
  } catch {
    spreadSheetTable.Z11.value = me_vector[10];
  }
  try {
    spreadSheetTable.Z12.value = me_vector[11].noteID;
  } catch {
    spreadSheetTable.Z12.value = me_vector[11];
  }
  try {
    spreadSheetTable.Z13.value = me_vector[12].noteID;
  } catch {
    spreadSheetTable.Z13.value = me_vector[12];
  }
  try {
    spreadSheetTable.Z14.value = me_vector[13].noteID;
  } catch {
    spreadSheetTable.Z14.value = me_vector[13];
  }
  try {
    spreadSheetTable.Z15.value = me_vector[14].noteID;
  } catch {
    spreadSheetTable.Z15.value = me_vector[14];
  }
  try {
    spreadSheetTable.Z16.value = me_vector[15].noteID;
  } catch {
    spreadSheetTable.Z16.value = me_vector[15];
  }
  try {
    spreadSheetTable.Z17.value = me_vector[16].noteID;
  } catch {
    spreadSheetTable.Z17.value = me_vector[16];
  }
  try {
    spreadSheetTable.Z18.value = me_vector[17].noteID;
  } catch {
    spreadSheetTable.Z18.value = me_vector[17];
  }
  try {
    spreadSheetTable.Z19.value = me_vector[18].noteID;
  } catch {
    spreadSheetTable.Z19.value = me_vector[18];
  }
  try {
    spreadSheetTable.Z20.value = me_vector[19].noteID;
  } catch {
    spreadSheetTable.Z20.value = me_vector[19];
  }
  try {
    spreadSheetTable.Z21.value = me_vector[20].noteID;
  } catch {
    spreadSheetTable.Z21.value = me_vector[20];
  }
  try {
    spreadSheetTable.Z22.value = me_vector[21].noteID;
  } catch {
    spreadSheetTable.Z22.value = me_vector[21];
  }
  try {
    spreadSheetTable.Z23.value = me_vector[22].noteID;
  } catch {
    spreadSheetTable.Z23.value = me_vector[22];
  }
  try {
    spreadSheetTable.Z24.value = me_vector[23].noteID;
  } catch {
    spreadSheetTable.Z24.value = me_vector[23];
  }
  try {
    spreadSheetTable.Z25.value = me_vector[24].noteID;
  } catch {
    spreadSheetTable.Z25.value = me_vector[24];
  }
}, 5000);
export { spreadSheetTable };
