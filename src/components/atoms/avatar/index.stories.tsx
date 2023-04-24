import { Avatar } from "./index";
import React from "react";
import {ComponentStory,ComponentMeta} from "@storybook/react"


export default{
    title:'Avatar',
    Component:Avatar,
    argTypes:{
        
        variant:{
            options:['circular', 'rounded', 'square'],
            control:{type:"radio"},
        },
        
    }
    
} as ComponentMeta<typeof Avatar>;
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarField = Template.bind({});
AvatarField.args={
   variant:'circular',
   
   src:'images/profile.svg',
   sx:{
      width:'36px',
      height:'36px',
      backgroundColor:'black',
   },
   children:'profile',
   
   
}

