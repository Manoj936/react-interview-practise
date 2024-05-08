import React, { useRef } from "react";

export default function useCustomMemo(cb, deeps) {
  const MemoizedVal = useRef({ val: null, deeps: null });
  const isEqualDeeps = (prevDeeps, nextDeeps) => {
    return (
      prevDeeps &&
      nextDeeps &&
      prevDeeps.length === nextDeeps.length &&
      prevDeeps.every((deeps, index) => deeps === nextDeeps[index])
    );
  };

  if (!isEqualDeeps(MemoizedVal.current.deeps, deeps)) {
    MemoizedVal.current = {
      val: cb(),
      deeps,
    };
  }
}
