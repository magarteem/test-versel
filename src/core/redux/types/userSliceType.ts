export interface SkillsDataType {
  tools: {
    title: string;
    item: string[];
  };
  notice?: {
    text: string;
    data: string;
  };
  addTools: string;
  link: string;
}

export interface InitialStateUserType {
  skillsData: SkillsDataType[]
}