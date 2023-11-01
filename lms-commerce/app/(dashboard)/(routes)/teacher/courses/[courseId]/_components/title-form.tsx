"use client";

import { FC, useState } from "react";
import * as z from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "../../../../../../../components/ui/form";
import { Button } from "../../../../../../../components/ui/button";
import { Input } from "../../../../../../../components/ui/input";
import Link from "next/link";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";

interface TitleFormProps {
  initialData: {
    title: string;
  };
  courseId: string;
}

const formShema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

export const TitleForm: FC<TitleFormProps> = ({ initialData, courseId }) => {
  const [isEditing, setIsEditing] = useState(false);

  const form = useForm<z.infer<typeof formShema>>({
    resolver: zodResolver(formShema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;
  const { control } = form;

  const toggleEdit = () => setIsEditing((prev) => !prev);

  const onSubmit = async (values: z.infer<typeof formShema>) => {
    try {
      const respone = await axios.post("/api/courses", values);
      // router.push(`/teacher/courses/${respone.data.id} `);
      toast.success("Course created");
    } catch (error) {
      console.log(error);
      toast.error("Lỗi");
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between ">
        Course Title
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && <div>Cancel</div>}
          {!isEditing && (
            <div className="flex items-center">
              <Pencil className="h-4 w-4 mr-2" />
              Edit title
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};
