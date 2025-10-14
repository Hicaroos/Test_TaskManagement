import React from "react";
import {Card} from "@/components/ui/Card";

export default function Index() {
    return (
        <div className="min-h-screen p-8 text-white">
            <div className="flex flex-col gap-8">

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <Card><h1>CARD: 1</h1></Card>
                    <Card><h1>CARD: 2</h1></Card>
                    <Card><h1>CARD: 3</h1></Card>
                </div>

                    <Card><h1>CARD: PRINCIPAL</h1></Card>
            </div>
        </div>
    );
}
