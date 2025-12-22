import type { Post } from '@/types/post';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Field, FieldLabel } from './ui/field';
import { Input } from './ui/input';
import { useEffect } from 'react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useMutation } from '@tanstack/react-query';
import { editPostService } from '@/services/edit-post.service';
import { useNavigate } from 'react-router';
import { getPostDetailsPath } from '@/constants/routes';

const validationSchema = z.object({
  title: z.string().min(1).max(80),
  text: z.string().min(12).max(1000),
});

type EditPostFormData = z.infer<typeof validationSchema>;

interface EditPostFormProps {
  post: Post | undefined;
  isLoading: boolean;
}

export default function EditPostForm({ post, isLoading }: EditPostFormProps) {
  const navigate = useNavigate();

  const form = useForm<EditPostFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      text: post?.text || '',
      title: post?.title || '',
    },
  });

  const { reset } = form;

  useEffect(() => {
    if (post) {
      reset({
        title: post.title,
        text: post.text,
      });
    }
  }, [post, reset]);

  const { mutate, isPending } = useMutation({
    mutationFn: editPostService,
    onSuccess: (updatedPost) => {
      navigate(getPostDetailsPath(updatedPost.id));
    },
  });

  function handleSubmit(data: EditPostFormData) {
    if (!post) {
      return;
    }

    mutate({
      postId: post.id,
      data,
    });
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <Field>
        <FieldLabel htmlFor="title">Title</FieldLabel>
        <Input
          type="text"
          placeholder="Title"
          id="title"
          disabled={isLoading || isPending}
          {...form.register('title')}
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="text">Text</FieldLabel>
        <Textarea
          placeholder="Text"
          id="text"
          disabled={isLoading || isPending}
          {...form.register('text')}
        />
      </Field>

      <Button type="submit" disabled={isLoading || isPending}>
        Save
      </Button>
    </form>
  );
}
