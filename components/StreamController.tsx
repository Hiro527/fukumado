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

const validateStreamUrl = (url: string) => {
    // Twitch
    const twitchRegex = /^(https?:\/\/)?(www\.)?(twitch\.tv\/)([a-zA-Z0-9_]+)$/;
    // YouTube
    const youtubeRegex =
        /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)$/;

    return twitchRegex.test(url) || youtubeRegex.test(url);
};

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
                                            if (!validateStreamUrl(value)) {
                                                alert(
                                                    "無効なURLです。TwitchまたはYouTubeの配信URLを入力してください。",
                                                );
                                                return;
                                            }
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
