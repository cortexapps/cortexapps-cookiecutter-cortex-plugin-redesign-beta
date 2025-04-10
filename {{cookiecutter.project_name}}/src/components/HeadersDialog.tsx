import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
    Button,
    Input,
    Dialog,
    DialogContent,
    DialogClose,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@cortexapps/react-plugin-ui";

interface HeaderItem {
  id: string;
  headerKey: string;
  headerValue: string;
}

interface HeadersDialogProps {
  headers: Record<string, string>;
  onSubmit: (headers: Record<string, string>) => void;
  onClose: () => void;
}

const HeadersDialog: React.FC<HeadersDialogProps> = ({ headers, onSubmit, onClose }) => {
  // Initialize headerItems from the headers record.
  const headersPropItems: HeaderItem[] = Object.entries(headers).map(([headerKey, headerValue]) => ({
    id: uuidv4(),
    headerKey,
    headerValue,
  }));

  const [headerItems, setHeaderItems] = useState<HeaderItem[]>(headersPropItems)

  const handleHeaderKeyChange = (id: string, newKey: string) => {
    setHeaderItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, headerKey: newKey } : item))
    );
  };

  const handleHeaderValueChange = (id: string, newValue: string) => {
    setHeaderItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, headerValue: newValue } : item))
    );
  };

  const addHeader = () => {
    const newItem: HeaderItem = {
      id: uuidv4(),
      headerKey: `header-${headerItems.length}`,
      headerValue: "",
    };
    setHeaderItems((prev) => [...prev, newItem]);
  };

  const handleSubmit = () => {
    // Convert headerItems back to a Record<string, string>
    const newHeaders: Record<string, string> = {};
    headerItems.forEach((item) => {
      if (item.headerKey) {
        newHeaders[item.headerKey] = item.headerValue;
      }
    });
    onSubmit(newHeaders);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" style={ { margin: "auto" } } >Headers ({headerItems.length})</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Headers</DialogTitle>
        </DialogHeader>
        {headerItems.map((item) => (
          <div key={item.id} className="flex flex-row gap-1 items-start justify-center align-center">
            <Input
              size={100}
              id={`header-key-${item.id}`}
              name={`header-key-${item.id}`}
              placeholder="Header key"
              value={item.headerKey}
              onChange={(e) => handleHeaderKeyChange(item.id, e.target.value)}
            />
            <Input
              size={100}
              id={`header-value-${item.id}`}
              name={`header-value-${item.id}`}
              placeholder="Header value"
              value={item.headerValue}
              onChange={(e) => handleHeaderValueChange(item.id, e.target.value)}
            />
          </div>
        ))}
        <div className="flex flex-row gap-1 items-start justify-center align-center">
          <Button variant="link" onClick={addHeader}>Add Header</Button>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={() => { setHeaderItems(headersPropItems); onClose?.();}}>
              Close
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={handleSubmit}>Ok</Button>
        </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HeadersDialog;
