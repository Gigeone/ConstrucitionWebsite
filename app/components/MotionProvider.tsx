"use client";
import { domAnimation, LazyMotion } from "framer-motion";

const MotionProvider = ({ children }: { children: React.ReactNode }) => (
  <LazyMotion features={domAnimation} strict>
    {children}
  </LazyMotion>
);

export default MotionProvider;
