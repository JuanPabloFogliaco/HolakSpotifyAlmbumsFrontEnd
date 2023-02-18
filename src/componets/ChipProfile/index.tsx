import { Chip, Separator, TextChip, WrapperChipProfile } from "./style";
import { VscAccount } from "react-icons/vsc";
import { AiFillCaretDown } from "react-icons/ai";
const ChipProfile = () => {
  return (
    <WrapperChipProfile>
      <Chip>
        <VscAccount color="white" size={"25px"}/>
        <Separator/>
        <TextChip>Juan Pablo</TextChip>
        <Separator/>
        <AiFillCaretDown color="white"  size={"22px"}/>
      </Chip>
    </WrapperChipProfile>
  );
};

export default ChipProfile;
