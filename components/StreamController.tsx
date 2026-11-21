"use client";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useStreamList } from "@/providers/StreamListProvider";
import { Button } from "./ui/button";

const StreamController = () => {
    const { streams, addStream } = useStreamList();
    const [value, setValue] = useState("");

    return (
        <div className="ml-4 flex items-center gap-2">
            <Dialog>
                <DialogTrigger
                    render={
                        <Button variant="outline" className="bg-slate-800">
                            <IoMdAdd />
                            追加
                        </Button>
                    }
                />
                <DialogContent className="px-6 py-4">
                    <DialogHeader>
                        <DialogTitle>配信を追加</DialogTitle>
                        <DialogDescription className="mt-2 flex flex-col gap-2">
                            <Input
                                placeholder="Twitch / YouTubeの配信URLを入力"
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <DialogClose
                                render={
                                    <Button
                                        onClick={() => {
                                            addStream(value);
                                            setValue("");
                                        }}
                                        value={value}
                                    >
                                        追加
                                    </Button>
                                }
                            />
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            {streams.map((stream) => {
                return <div key={stream}>{stream}</div>;
            })}
        </div>
    );
};

export default StreamController;
