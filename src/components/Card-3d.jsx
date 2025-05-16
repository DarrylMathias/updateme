"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { HStack, Badge } from "@chakra-ui/react";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function Card_3d(props) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[550px] rounded-xl p-4 border flex flex-col">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {props.heading}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {props.content}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={props.image}
            alt={props.alt}
            className="w-full h-[200px] object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            className="px-4 rounded-xl text-xs font-normal dark:text-white"
          >
            <HStack>
              <a href={props.sourceURL}>
                <Badge>{props.sourceName}</Badge>
              </a>
              <Badge>{props.time}</Badge>
            </HStack>
          </CardItem>
        </div>
      </CardBody>
      <BorderBeam duration={8} size={100} />
    </CardContainer>
  );
}
