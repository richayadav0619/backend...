import mongoose from "mongoose";
import { Comment } from "../models/comment.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createComment = asyncHandler(async (req, res) => {

    const { content } = req.body;

    const { videoId } = req.params;

    if (!content || content.trim() === "") {
        throw new ApiError(400, "Comment content is required");
    }

    if (!mongoose.Types.ObjectId.isValid(videoId)) {
        throw new ApiError(400, "Invalid video id");
    }

    const comment = await Comment.create({
        content,
        video: videoId,
        owner: req.user._id
    });

    if (!comment) {
        throw new ApiError(500, "Failed to create comment");
    }

    return res
        .status(201)
        .json(
            new ApiResponse(
                201,
                comment,
                "Comment created successfully"
            )
        );
});

export { createComment };