'use client';
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import  {FormProvider, useForm} from 'react-hook-form'
import { quizCreationSchema } from '@/schemas/form/quiz'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Button } from './ui/button'
import { Input } from './ui/Input'
import { BookOpen, CopyCheck } from 'lucide-react';
import { Separator } from './ui/separator';


type Props = {}

type Input = z.infer<typeof quizCreationSchema>

const QuizCreation = (props: Props) => {
    const form = useForm<Input>({
        resolver: zodResolver(quizCreationSchema),
        defaultValues: {
            amount: 3,
            topic: '',
            type: 'open_ended',
        },
    });


    const onSubmit = (input: Input) => {
        alert(JSON.stringify(input, null, 2));
        // Handle form submission logic here
    };

    form.watch();
  
  return (
     <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Quiz Creation</CardTitle>
          <CardDescription>Choose a topic</CardDescription>
        </CardHeader>
        <CardContent>
            <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Topic</FormLabel>
              <FormControl>
                <Input placeholder="Enter a Topic..." {...field} />
              </FormControl>
              <FormDescription>
                Please Providea a Topic
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Questions</FormLabel>
              <FormControl>
                <Input placeholder="Enter an Amount..." 
                {...field}
                type='number'
                min={1}
                max={10}
                onChange={(e) => {
                    form.setValue('amount', parseInt(e.target.value));
                }}
                 />
              </FormControl>
        
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between">
                <Button
                  variant={
                    form.getValues("type") === "mcq" ? "default" : "secondary"
                  }
                  className="w-1/2 rounded-none rounded-l-lg"
                  onClick={() => {
                    form.setValue("type", "mcq");
                  }}
                  type="button"
                >
                  <CopyCheck className="w-4 h-4 mr-2" /> Multiple Choice
                </Button>
                <Separator orientation="vertical" />
                <Button
                  variant={
                    form.getValues("type") === "open_ended"
                      ? "default"
                      : "secondary"
                  }
                  className="w-1/2 rounded-none rounded-r-lg"
                  onClick={() => form.setValue("type", "open_ended")}
                  type="button"
                >
                  <BookOpen className="w-4 h-4 mr-2" /> Open Ended
                </Button>
              </div>
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider> 

        


        </CardContent>
      </Card>
    </div>
  )
}

export default QuizCreation