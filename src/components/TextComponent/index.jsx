import { Text } from 'components'
import React from 'react'

function TextComponent({title}) {
  return (
<>
            <Text
              className="flex font-manrope  max-w-[1099px] mt-6 mx-auto md:px-5 w-full text-teal-900 text-xl"
              size="txtLexendSemiBold14"
            >
              {title}
            </Text>
</>  )
}
TextComponent.defaultProps = {
    title: "Titre de section",
  };
export default TextComponent