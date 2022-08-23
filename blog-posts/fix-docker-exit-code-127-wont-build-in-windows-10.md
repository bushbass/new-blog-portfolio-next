---
title: "Docker container won't build in Windows 10"
date: '2022-08-23'
categories:
  - 'javascript'
tags:
  - 'docker'
---

I added a video version of this blog. If you prefer video, check it out: [https://www.youtube.com/watch?v=Jpk81N-yl-k](https://www.youtube.com/watch?v=Jpk81N-yl-k)

## TLDR solution:

Run the following command then delete and re-clone the repo. Build should now work.

`git config --global core.autocrlf false`

---

I was trying to learn Docker and I kept running into problems. Things wouldn't build properly. Finally, I had a situation where I absolutely had to learn it to get a project done, so I had to find a way to solve these problems. I was trying to track down the solution but couldn't find it, but finally figured it out.

I would clone a repo and try to run the Docker build command as the instructions in the readme file said but I would end up with an error something like "fail to solve execute" "or failed exit code 127 failed to build".

So after searching around for quite a while I found a solution. Windows and Linux or Unix represent line endings differently under the hood. One uses \n and one uses \r\n. Docker apparently doesn't seem to understand this.

If you’re a windows user you’ve probably seen this when you're cloning somebody else's repo that maybe was created in Linux or Unix and you go to commit and it says something about automatically changing line endings. I always ignored that because it didn't seem to matter and everything seemed to work. In this case with Docker, it doesn't seem to work and actually did cause a problem.

After some googling, I had the idea that it had something to do with the line endings. We can change the config in git to not automatically change the line endings with this command:

`git config --global core.autocrlf false`

Your repo still won’t work at this point. You’ll need to delete and re-clone it. Once you do that, when you run the build command it should work.

Now let's say for some reason you need to change this line and break behavior back. This is also pretty simple. Use the same git config command and change the final argument to true and it will be back to the way it was.

`git config --global core.autocrlf true`

I hope this is helpful. It sure took me a while to figure this out and get going with Docker. The truth is for the website I needed to figure this out for, Docker was kind of overkill, but someone else set it up for me and at least it gave me a reason to get my hands a little bit dirty with Docker.
